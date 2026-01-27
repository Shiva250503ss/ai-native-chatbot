import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of opportunities I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about job search, internship, or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Availability**: Currently pursuing MS @ CU Boulder (Grad: May 2026), open to full-time opportunities
- 🌍 **Location**: Boulder, CO (Open to Relocate anywhere in the US!)
- 🧑‍💻 **Focus**: AI Engineering, Data Science, Machine Learning, Data Engineering
- 🛠️ **Stack**: Python, PyTorch, TensorFlow, LangChain, SQL, Spark, AWS, Tableau, Power BI
- ✅ **What I bring**: End-to-end ML experience, RAG pipelines, production deployments, published research (IEEE AIMLA 2024)
- 🔥 I build things that work, learn fast, and bring great energy (plus cricket analogies) to the team! 🏏

📬 **Contact me** via:
- Email: shse1502@colorado.edu
- Phone: (720) 260-6977
- LinkedIn: [shivaraj-senthil-rajan](https://www.linkedin.com/in/shivaraj-senthil-rajan-2b8898227/)
- GitHub: [Shiva250503ss](https://github.com/Shiva250503ss)

Let's build something awesome together! 🚀
    `;
  },
});
