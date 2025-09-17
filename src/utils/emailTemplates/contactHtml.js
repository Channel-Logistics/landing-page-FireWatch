const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

export function buildContactHtml(form, opts = {}) {
  const brand = {
    accent: opts.accent || "#f97316", 
    text: "#0f172a",                  
    muted: "#64748b",                 
    bg: "#f8fafc",                    
    card: "#ffffff",
  };

  const rows = [
    ["Name", form.name],
    ["Email", form.email],
    ["Phone", form.phone],
    ["Country", form.country],
    ["Company", form.company],
    ["Help", form.help],
  ];

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${brand.bg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.bg};padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:${brand.card};border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
            <!-- Header -->
            <tr>
              <td style="background:${brand.accent};padding:20px 24px;color:#fff;font-family:Arial,Helvetica,sans-serif;">
                <h1 style="margin:0;font-size:20px;line-height:1.3;">New Contact Message</h1>
                <p style="margin:4px 0 0;font-size:13px;opacity:0.9;">Submitted from website contact form</p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;font-family:Arial,Helvetica,sans-serif;color:${brand.text};">
                <h2 style="margin:0 0 12px 0;font-size:18px;">Details</h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${rows.map(([label, val]) => `
                    <tr>
                      <td style="padding:10px 0;width:160px;color:${brand.muted};font-size:13px;">${esc(label)}</td>
                      <td style="padding:10px 0;font-size:14px;color:${brand.text};">${esc(val || "-")}</td>
                    </tr>
                    <tr><td colspan="2" style="border-bottom:1px solid #e2e8f0;"></td></tr>
                  `).join("")}
                </table>

                <h2 style="margin:20px 0 8px 0;font-size:18px;">Message</h2>
                <div style="padding:12px 14px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;color:${brand.text};font-size:14px;line-height:1.5;">
                  ${esc(form.message).replace(/\n/g, "<br/>")}
                </div>

                <p style="margin:18px 0 0 0;color:${brand.muted};font-size:12px;">
                  Reply directly to this email to contact <b>${esc(form.name || "the sender")}</b>.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:14px 24px;font-family:Arial,Helvetica,sans-serif;color:${brand.muted};font-size:12px;background:#fafafa;border-top:1px solid #e2e8f0;">
                Sent from FireWatch Landing Page
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px;font-family:Arial,Helvetica,sans-serif;color:${brand.muted};font-size:12px;background:#fafafa;border-top:1px solid #e2e8f0;">
                © ${new Date().getFullYear()} Space Eyes — All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
