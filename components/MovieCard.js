import React from "react";
import Image from "next/image";
import { imageServer } from "../config";
import Link from "next/link";

function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-sm rounded-sm rounded-md cursor-pointer">
        <Image
          src={`${imageServer}${movie.poster_path}`}
          width={700}
          height={800}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
