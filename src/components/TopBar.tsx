import React from 'react';

export function TopBar() {
  const topBarStyle: React.CSSProperties = {
    backgroundColor: '#343a40', // A dark background color (Bootstrap's dark color)
    color: '#f8f9fa',          // Light text color
    padding: '8px 15px',
    display: 'flex',
    justifyContent: 'space-between', // Aligns items to start, center, end
    alignItems: 'center',
    fontSize: '0.9rem'
  };

  const socialLinkStyle: React.CSSProperties = {
    color: '#f8f9fa',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const socialMediaContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const whatsappStyle: React.CSSProperties = {
    color: '#25D366', // WhatsApp green
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold'
  };

  return (
    <div style={topBarStyle}>
      <div style={socialMediaContainerStyle}>
        {/* Placeholder for a logo or brand on the left if ever needed */}
        {/* <span style={{ marginRight: 'auto' }}></span>  */}
      </div>
      <div style={socialMediaContainerStyle}>
        <a href="https://www.facebook.com/profile.php?id=61576264447755" target="_blank" style={socialLinkStyle} title="Facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/tucelucion.bb/" target="_blank" style={socialLinkStyle} title="Instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://wa.me/2914050117" target="_blank" rel="noopener noreferrer" style={whatsappStyle} title="WhatsApp">
          <i className="bi bi-whatsapp"></i> +54 9 2914050117
        </a>
      </div>
    </div>
  );
}
