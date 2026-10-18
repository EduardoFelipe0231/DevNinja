const Footer = () => {
    return(
        <footer className="bg-zinc-900 text-zinc-100 flex items-center justify-center py-5 text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} <span className="font-semibold text-orange-700">DevNinja</span>. All Rigths Reserved.</p>
        </footer>
    )
}

export default Footer;