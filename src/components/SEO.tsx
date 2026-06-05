import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
}) => {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
      
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) metaTitle.setAttribute("content", title);
      
      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute("content", ogTitle || title);
      
      const twitterTitleEl = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitleEl) twitterTitleEl.setAttribute("content", ogTitle || title);
    }

    // 2. Description
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", description);
      
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute("content", ogDescription || description);
      
      const twitterDescEl = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescEl) twitterDescEl.setAttribute("content", ogDescription || description);
    }

    // 3. Keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "keywords";
        newMeta.content = keywords;
        document.head.appendChild(newMeta);
      }
    }

    // 4. URL
    if (ogUrl) {
      const ogUrlEl = document.querySelector('meta[property="og:url"]');
      if (ogUrlEl) ogUrlEl.setAttribute("content", ogUrl);
      
      const twitterUrlEl = document.querySelector('meta[property="twitter:url"]');
      if (twitterUrlEl) twitterUrlEl.setAttribute("content", ogUrl);
      
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.setAttribute("href", ogUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl]);

  return null;
};

export default SEO;
