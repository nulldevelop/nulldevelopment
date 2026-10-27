"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, MessageCircle, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/i18n/provider"
import { whatsappUrl } from "@/i18n/format"
import { company } from "@/lib/company"

interface MobileMenuProps {
  className?: string
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  const menuItems = [
    { name: t.nav.projects, href: "/#portfolio" },
    { name: t.nav.career, href: "/#experiencia" },
    { name: t.nav.services, href: "/#servicos" },
    { name: t.nav.faq, href: "/#faq" },
    { name: t.nav.contact, href: "/#contato" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "p-2 text-zinc-400 hover:text-white transition-colors rounded-xl border border-white/10 bg-black/40",
            className
          )}
          aria-label={t.nav.openMenu}
        >
          <Menu size={18} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />

        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-zinc-950 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <span className="font-sentient font-bold text-lg text-white">
                pedro<span className="text-yellow-400">.dev</span>
              </span>
              <Dialog.Close asChild>
                <button
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors rounded-lg border border-white/10"
                  aria-label={t.nav.closeMenu}
                >
                  <X size={18} />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Title className="sr-only">{t.nav.navigation}</Dialog.Title>

            <nav className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-base font-mono uppercase text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href={whatsappUrl(company.whatsapp, t.whatsapp.budget)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs uppercase h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.whatsappDirect}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
