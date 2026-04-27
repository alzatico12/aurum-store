//- Imagen del producto

interface ProductImagesProps {
  images: string[];
  name: string;
}

export function ProductImages({ images, name }: ProductImagesProps) {
  return (
    <div className="w-full">
      {/* Imagen principal */}
      <div className="relative overflow-hidden rounded-sm bg-accent aspect-[3/4] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${images[0]}')` }}
          role="img"
          aria-label={name}
        />
      </div>
    </div>
  );
}