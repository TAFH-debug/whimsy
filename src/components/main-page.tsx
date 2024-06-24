'use client';
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function MainPage() {

  const scrollSmoothly = (id: string) => {
    document.querySelector(`#${id}`)!.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Image src="/logo.svg" alt="" width={40} height={40} className="m-2"/>
        </Link>
        <a href="/" className="font-bold white text-2xl">Whimsy</a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollSmoothly("features")}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollSmoothly("about")}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollSmoothly("contact")}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted justify-center flex">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Empowering creativity <span className="white">through AI</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We harness the power of Artificial Intelligence to revolutionize the way games are created.
                Whether you&apos;re an indie developer, a game design studio, or just a passionate gamer with an idea, our cutting-edge technology brings your vision to life effortlessly.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex shimmers h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden border-blue border-2 rounded-[10px] w-[500px] m-auto">
              <ImageSized
                src="image1.png"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 justify-center flex" id="features">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose <span className="white">Whimsy AI ?</span></h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="grid gap-1 animate-[slide-in-left_0.5s_ease-out]">
                  <h3 className="text-xl font-bold">Intelligent Game Design</h3>
                  <p className="text-muted-foreground">
                  Our advanced AI technology analyzes your concepts and crafts personalized game mechanics, characters, and storylines.
                  </p>
                </div>
                <div className="grid gap-1 animate-[slide-in-left_0.7s_ease-out]">
                  <h3 className="text-xl font-bold">Speed and Efficiency</h3>
                  <p className="text-muted-foreground">
                  From storyboard to playable game, experience an accelerated development process that saves time without sacrificing quality.
                  </p>
                </div>
                <div className="grid gap-1 animate-[slide-in-left_0.9s_ease-out]">
                  <h3 className="text-xl font-bold">Endless Customization</h3>
                  <p className="text-muted-foreground">
                  Tweak every detail or let our AI surprise you with innovative features you never imagined possible.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden border-blue border-2 rounded-[10px]">
                <ImageSized
                  src="image2.png"
                  width="550"
                  height="310"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted justify-center flex" id="about">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works?</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6 animate-[slide-in-left_0.5s_ease-out]">
                <div className="grid gap-4 rounded-[10px] border bg-background p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-lg font-semibold">1. Generate</h4>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground">
                  Watch as our AI engine turns your concepts into a complete, playable game.
                  </blockquote>
                </div>
                <div className="grid gap-4 rounded-[10px] border bg-background p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-lg font-semibold">2. Customize</h4>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground">
                  Refine and personalize every aspect of your game with our intuitive editor.
                  </blockquote>
                </div>
                <div className="grid gap-4 rounded-[10px] border bg-background p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-lg font-semibold">1. Deploy</h4>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground">
                  Once satisfied, deploy your game across multiple platforms with a single click. Share it with friends, the community, or even the world.
                  </blockquote>
                </div>
              </div>
              <div className="relative overflow-hidden border-blue border-2 rounded-[10px]">
                <ImageSized
                  src="image3.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t justify-center flex" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to <span className="white">generate, invent and play?</span>
              </h2>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Whimsy Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ImageSized({ src, width, height }: { src: string, width?: string, height?: string }) {
  return <img
    src={src}
    width={width}
    height={height}
    alt="Illustration"
    className={"mx-auto h-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last animate-[float_6s_ease-in-out_infinite]"}
  />

}