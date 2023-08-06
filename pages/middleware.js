export default async function middleware(NextRequest) {
  const authHeader = NextRequest.headers["authentication"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.redirect('/aut/login');

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, data) => {
    if (error) res.redirect('/auth/login');
    return res.send(data);
  });
  console.log(authHeader);
}

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}