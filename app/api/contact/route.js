export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Mock storage - in production, send email
    console.log("Contact form submission:", { name, email, subject, message })

    return Response.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
