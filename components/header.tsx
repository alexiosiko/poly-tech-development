export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
	return (
		<p className={`${className} mb-4 text-center text-4xl font-bold text-[var(--accent-other)]  `}>
			{children}
		</p>
	)
}