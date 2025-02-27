export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-center">
            <p>
              &copy; {new Date().getFullYear()} Elite Servers. Coded with ❤️ by <a href="https://github.com/LifeGoal" className="link link-hover">LifeGoal</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}