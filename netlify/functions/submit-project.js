exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const name = data.name?.trim();
    const company = data.company?.trim();
    const whatsapp = data.whatsapp?.trim();
    const email = data.email?.trim();
    const projectType = data.projectType?.trim();
    const message = data.message?.trim();

    if (!name || !whatsapp || !projectType || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "يرجى تعبئة الحقول المطلوبة." }),
      };
    }

    const botToken = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    if (!botToken || !chatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Telegram configuration missing." }),
      };
    }

    const text = `
🚀 طلب مشروع جديد - APTIX

👤 الاسم:
${name}

🏢 الشركة / النشاط:
${company || "غير محدد"}

📱 الواتساب:
${whatsapp}

📧 البريد:
${email || "غير محدد"}

💻 نوع المشروع:
${projectType}

📝 وصف المشروع:
${message}

━━━━━━━━━━━━━━
🌐 المصدر: APTIX Website
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    if (!telegramResponse.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to send Telegram message." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "تم إرسال طلبك بنجاح." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "حدث خطأ أثناء الإرسال." }),
    };
  }
};