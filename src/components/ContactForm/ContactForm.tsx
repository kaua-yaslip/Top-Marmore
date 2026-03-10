"use client";

import { useState } from "react";
import { settings, url } from "@/settings/settings";
import { ResponseData, FormData } from "@/types";
import styles from "./ContactForm.module.scss";
import { FormDataSchema } from "@/schemas/form";

const { siteName, emailDestinatario } = settings;
const RECAPTCHA_SITE_KEY = "6LdzZvAqAAAAACIdoEUtHKHYYNNwIyDVODykjcpn";

type ContactFormProps = {
  variation?: keyof typeof styles;
};

export default function ContactForm({ variation = "contatoForm" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    como_nos_conheceu: "",
    mensagem: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  function phoneFormat(e: React.FormEvent<HTMLInputElement>): void {
    let value = e.currentTarget.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
  }

  const loadRecaptcha = () => {
    if (recaptchaLoaded) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => setRecaptchaLoaded(true);
  };

  async function getRecaptchaToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha?.execute) {
        reject("reCAPTCHA não carregado");
        return;
      }

      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
        .then(resolve)
        .catch(reject);
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const formDataValid = FormDataSchema.parse(formData);

      setMessage("Enviando...");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formDataValid, recaptchaToken }),
      });

      const data: ResponseData = await res.json();
      setMessage(data.message || data.error || "Erro ao enviar.");

      if (!res.ok) return;

      const backupData = {
        nome: siteName,
        endereco: url,
        mensagem: Buffer.from(
          `
          <h2>Formulário via site - ${siteName}</h2>
          <p><strong>Nome:</strong> ${formData.nome}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.telefone}</p>
          <p><strong>Como nos Conheceu:</strong> ${formData.como_nos_conheceu}</p>
          <p><strong>Mensagem:</strong> ${formData.mensagem}</p>
          <br>
          <p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR")}</p>
          <p><strong>Destinatário:</strong> ${emailDestinatario}</p>
        `,
          "utf-8"
        ).toString("base64"),
      };

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        como_nos_conheceu: "",
        mensagem: "",
      });

      await fetch("/api/salvar-backup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backupData),
      });

      setMessage("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error(error);
      setMessage("Erro ao enviar o formulário.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles[variation]}>
      {message && <p className={styles.formSuccess}>{message}</p>}

      <div className={styles.boxInput}>
        <div className={styles.inputForm}>
          <label>Nome *</label>
          <input
            type="text"
            value={formData.nome}
            onClick={loadRecaptcha}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />
        </div>

        <div className={styles.inputForm}>
          <label>Email *</label>
          <input
            type="email"
            value={formData.email}
            onClick={loadRecaptcha}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className={styles.boxInput}>
        <div className={styles.inputForm}>
          <label>Telefone *</label>
          <input
            type="text"
            maxLength={15}
            value={formData.telefone}
            onKeyUp={phoneFormat}
            onClick={loadRecaptcha}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            required
          />
        </div>

        <div className={styles.inputForm}>
          <label>Empresa *</label>
          <input
            type="text"
            value={formData.empresa}
            onClick={loadRecaptcha}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            required
          />
        </div>
      </div>

      <div className={styles.inputForm}>
        <label>Como nos conheceu? *</label>
        <select
          value={formData.como_nos_conheceu}
          onClick={loadRecaptcha}
          onChange={(e) =>
            setFormData({ ...formData, como_nos_conheceu: e.target.value })
          }
          required
        >
          <option value="" disabled>Selecione</option>
          <option>Busca do Google</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Indicação</option>
          <option>Outros</option>
        </select>
      </div>

      <div className={styles.inputForm}>
        <label>Mensagem *</label>
        <textarea
          value={formData.mensagem}
          onClick={loadRecaptcha}
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          required
        />
      </div>

      <button className={styles.btnSubmit} type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
