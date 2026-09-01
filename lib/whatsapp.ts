import type { Product } from "@/data/products";

export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

function openWhatsApp(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppLink() {
  return openWhatsApp(
    "Hello EYEKON,\n\nI would like to know more about your ophthalmic equipment.",
  );
}

export function buildProductWhatsAppLink(product: Product, quantity: number) {
  const productLabel = product.code ? `${product.code} - ${product.name}` : product.name;

  return openWhatsApp(
    `Hello EYEKON,\n\nI am interested in the following ophthalmic equipment:\n\nProduct: ${productLabel}\nQuantity: ${quantity}\n\nPlease share the price, availability and further details.\n\nThank you.`,
  );
}

export function buildEnquiryWhatsAppLink(
  items: Array<{ product: Product; quantity: number }>,
  contactDetails?: {
    fullName?: string;
    phone?: string;
    email?: string;
    company?: string;
    productInterest?: string;
    message?: string;
  },
) {
  const productLines =
    items.length > 0
      ? items
          .map(
            (item, index) =>
              `${index + 1}. ${item.product.code ? `${item.product.code} - ` : ""}${item.product.name}\nQuantity: ${item.quantity}`,
          )
          .join("\n\n")
      : "No specific products selected yet.";

  const contactBlock = contactDetails
    ? `\nContact Details:\nName: ${contactDetails.fullName || "-"}\nPhone: ${contactDetails.phone || "-"}\nEmail: ${contactDetails.email || "-"}\nCompany / Clinic: ${contactDetails.company || "-"}\nProduct of Interest: ${contactDetails.productInterest || "-"}\nMessage: ${contactDetails.message || "-"}\n`
    : "";

  return openWhatsApp(
    `Hello EYEKON,\n\nI would like to enquire about the following ophthalmic equipment:\n\n${productLines}\n${contactBlock}\nPlease share pricing, availability and further details.\n\nThank you.`,
  );
}
