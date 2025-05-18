import fs from 'fs';
import path from 'path';

// Path to the JSON file
const filePath = path.join(process.cwd(), 'data', 'testimonials.json');

// Ensure the data directory and file exist
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
  fs.mkdirSync(path.join(process.cwd(), 'data'));
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Read testimonials
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // Add new testimonial
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const newTestimonial = req.body;
    data.push(newTestimonial);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json({ message: 'Testimonial submitted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}