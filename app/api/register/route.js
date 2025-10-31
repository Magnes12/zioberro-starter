export async function POST(request) {
  try {
    const { name, email, age, message, camp } = await request.json()

    if (!name || !email || !age || !camp) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Mock storage - in production, save to a database
    console.log("Camp registration:", { name, email, age, message, camp })

    return Response.json(
      {
        success: true,
        message: "Registration received. We will contact you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
