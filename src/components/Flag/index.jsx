import React, { useState } from "react";
import './Flag.css'
import { currencyToCountry } from "../../utils/currencyToCountry";

export default function Flag({ currency }) {
  const [imageError, setImageError] = useState(false);

  if (!currency) return null;

  const upper = currency.toUpperCase();
  const country = currencyToCountry[upper];

  if (!country) {
    // Se não há país mapeado, mostra o código da moeda como fallback
    return <div className="flag-fallback" title={upper}>{upper}</div>;
  }

  // Se houve erro ao carregar a imagem, mostra fallback
  if (imageError) {
    return <div className="flag-fallback" title={upper}>{upper}</div>;
  }

  const countryCode = country.toLowerCase();
  
  // Usa flagcdn.com para obter a bandeira (png de 64x48 pixels)
  const flagUrl = `https://flagcdn.com/64x48/${countryCode}.png`;

  return (
    <img 
      src={flagUrl}
      alt={`${upper} flag`}
      className="flag-image"
      onError={() => setImageError(true)}
      title={upper}
    />
  );
}
