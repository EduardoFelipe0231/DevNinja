const Footer = () => {
    return(
        <footer className="bg-zinc-100 text-zinc-900 flex items-center justify-center py-5 text-sm dark:bg-zinc-900/95 dark:text-zinc-100">
            <p>Copyright &copy; {new Date().getFullYear()} <span className="font-semibold text-zinc-900 dark:text-yellow-300">DevNinja</span>. All Rigths Reserved.</p>
        </footer>
    )
}

export default Footer;