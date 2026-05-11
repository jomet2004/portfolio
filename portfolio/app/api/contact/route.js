import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Prepare data to save
    const contactEntry = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString()
    };

    // Save to a local JSON file to simulate database (full-stack functionality)
    const filePath = path.join(process.cwd(), 'contacts.json');
    
    let contacts = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      contacts = JSON.parse(fileData);
    } catch (error) {
      // File might not exist yet, which is fine
    }

    contacts.push(contactEntry);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

    // Wait a brief moment to simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
