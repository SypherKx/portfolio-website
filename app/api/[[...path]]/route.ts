import { NextRequest, NextResponse } from 'next/server'
import { MongoClient, type Db } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let client: MongoClient | null = null

async function getDb(): Promise<Db> {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL as string)
    await client.connect()
  }
  return client.db(process.env.DB_NAME || 'karan_portfolio')
}

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors })
}

export async function GET(_req: NextRequest, { params }: { params: { path?: string[] } }) {
  const path = (params?.path || []).join('/')
  if (path === '' || path === 'health') {
    return NextResponse.json({ status: 'ok', service: 'karan-portfolio' }, { headers: cors })
  }
  return NextResponse.json({ error: 'not found' }, { status: 404, headers: cors })
}

export async function POST(req: NextRequest, { params }: { params: { path?: string[] } }) {
  const path = (params?.path || []).join('/')
  try {
    const body = await req.json()
    if (path === 'contact') {
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        name: body.name || '',
        email: body.email || '',
        message: body.message || '',
        createdAt: new Date().toISOString()
      }
      await db.collection('contacts').insertOne(doc)
      return NextResponse.json({ ok: true, id: doc.id }, { headers: cors })
    }
    return NextResponse.json({ error: 'not found' }, { status: 404, headers: cors })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: cors })
  }
}
