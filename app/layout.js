import './globals.css';

export const metadata = {
    title: 'Bokaro Pest Control Services | Professional Pest Management in Bokaro',
    description:
        'Expert pest control services in Bokaro – Termite, Cockroach, Rodent, Bed Bug, Mosquito & Sanitization. Safe, affordable & long-lasting solutions for homes and businesses.',
    keywords:
        'pest control Bokaro, termite control Bokaro, cockroach control, rodent control, bed bug treatment, mosquito control, sanitization services Bokaro, Raju pest control',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="font-poppins antialiased">{children}</body>
        </html>
    );
}
