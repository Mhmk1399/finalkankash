// lib/auth.ts
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'KanKashStok1400';

export const verifyToken = (req: NextRequest) => {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return { error: 'Authentication required' };
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { decoded };
  } catch (error) {
    return { error: 'Invalid or expired token' };
  }
};

export const requireAdmin = (req: NextRequest) => {
  const { decoded, error } = verifyToken(req);
  if (error) {
    return { error };
  }

  if (typeof decoded === 'object' && decoded !== null && decoded.isadmin !== 'true') {
    return { error: 'Unauthorized: Admin access only' };
  }

  return { decoded };
};
