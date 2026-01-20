"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { certificates } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { BoxReveal } from "../reveal-animations";

import Image from "next/image"; // Ensure imports are at the top

const CertificatesSection = () => {
    return (
        <section id="certificates" className="w-full py-20 px-4 md:px-0">
            <div className="max-w-7xl mx-auto">
                <Link href={"#certificates"}>
                    <h2
                        className={cn(
                            "bg-clip-text text-4xl text-left text-transparent md:text-7xl mb-16 md:ml-20 ml-10",
                            "bg-gradient-to-b from-black/80 to-black/50",
                            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
                        )}
                    >
                        CERTIFICATES
                    </h2>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <BoxReveal key={cert.id} width="100%" delay={index * 0.1}>
                            <Link href={cert.link} target="_blank">
                                <div className="group relative w-full rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md" style={{ aspectRatio: "3/2" }}>
                                    {/* Image or Abstract background */}
                                    {cert.image ? (
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-fill transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                                    )}

                                    {/* ID Pill */}
                                    {cert.credentialId && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                                ID: {cert.credentialId}
                                            </span>
                                        </div>
                                    )}

                                    {/* Content Overlay */}
                                    <div className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent transition-all pointer-events-none">
                                        <div className="flex flex-col h-full items-start justify-end p-6 gap-2">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {cert.title}
                                            </h3>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-sm text-slate-600 dark:text-gray-300">
                                                    {cert.issuer}
                                                </p>
                                                <span className="text-xs font-mono text-slate-500 dark:text-gray-400 bg-black/5 dark:bg-white/10 px-2 py-1 rounded">
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <div className="mt-2 text-xs text-blue-600 dark:text-blue-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                                View Certificate <ExternalLink size={12} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </BoxReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
