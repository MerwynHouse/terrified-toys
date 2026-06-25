const GROUPS = {
  'petty-partner': '191288406396896548',
  'hunting-lad': '191288406920136322',
  'dog-content': '191288407453861131',
  'prank-gifter': '191288408037918664',
};
const DEFAULT_GROUP = '191287946884678999'; // Waiting List

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, persona } = req.body || {};

  if (!email || typeof email !== 'string') {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  const groupId = GROUPS[persona] || DEFAULT_GROUP;

  try {
    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        fields: { name: name || '' },
        groups: [groupId],
      }),
    });

    if (!mlResponse.ok) {
      const errBody = await mlResponse.text();
      console.error('MailerLite error:', mlResponse.status, errBody);
      res.status(502).json({ error: 'Failed to subscribe' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
