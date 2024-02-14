export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
	return (
		<p className={`${className} text-center text-5xl font-bold text-[var(--title)]  `}>
			{children}
		</p>
	)
}