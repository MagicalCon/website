import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const EVENT_MAPPING = {
  "magical-cosplay-con": "Magical Cosplay Con",
  "disney-markt": "Magical Disney Markt",
  "hobby-con": "Magical Hobby Beurs",
};

export const exhibitor = {
  submit: defineAction({
    accept: "form",
    input: z.object({
      event: z.string(),
      name: z.string(),
      phone: z.string(),
      email: z.string().email(),
      street: z.string(),
      zip: z.string(),
      city: z.string(),
      website: z.string().optional(),
      facebook: z.string().optional(),
      message: z.string().optional(),
    }),
    handler: async (input) => {
      try {
        await resend.emails.send({
          to: import.meta.env.RESEND_TO,
          from: import.meta.env.RESEND_FROM,
          subject: `Bericht van ${input.name} via magicalcon.be`,
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html lang="nl">
          <head>
            <meta charset="utf-8">
          
            <title>Magical Events</title>
            <meta name="description" content="De magische markt met kraampjes, standhouders, kindergrime, kinderanimatie, cosplayers en live optreden!">
            <meta name="author" content="Magical Verzamel Markt">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          </head>
          
          <body>
            <h1>Je hebt een nieuw bericht van ${
              input.name
            }, ze hebben deze info achter gelaten:</h1>
            <p>Event: ${
              EVENT_MAPPING[input.event as keyof typeof EVENT_MAPPING]
            }</p>
            <p>📞: ${input.phone}</p>
            <p>✉️: ${input.email}</p>
            <p>Straat: ${input.street}</p>
            <p>Postcode: ${input.zip}</p>
            <p>Stad: ${input.city}</p>
            <p>Website: ${input.website ?? "Niet ingevuld"}</p>
            <p>Meta: ${input.facebook ?? "Niet ingevuld"}</p>
            <div style="font-size: 16px;">
              <p>Bericht:</p>
              <p>${input.message ?? "Niet ingevuld"}</p>
            </div>
          </body>
          </html>`,
        });
      } catch (error: any) {
        console.log(error.response.body);
      }
    },
  }),
};
