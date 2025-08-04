/**
 * Optimiza URLs de imágenes de Hygraph para diferentes usos
 */

export function optimizeImageForOG(url: string): string {
  if (!url.includes('media.graphassets.com')) {
    return url;
  }
  
  // Si la URL ya tiene transformaciones, las reemplazamos
  if (url.includes('/resize=')) {
    return url.replace(/\/resize=[^\/]+/, '/resize=width:1200,height:630');
  }
  
  // Si no tiene transformaciones, las agregamos
  return url.replace('/output=format:webp/', '/resize=width:1200,height:630/output=format:webp/');
}

export function optimizeImageForThumbnail(url: string, width: number = 400, height: number = 225): string {
  if (!url.includes('media.graphassets.com')) {
    return url;
  }
  
  // Si la URL ya tiene transformaciones, las reemplazamos
  if (url.includes('/resize=')) {
    return url.replace(/\/resize=[^\/]+/, `/resize=width:${width},height:${height}`);
  }
  
  // Si no tiene transformaciones, las agregamos
  return url.replace('/output=format:webp/', `/resize=width:${width},height:${height}/output=format:webp/`);
} 