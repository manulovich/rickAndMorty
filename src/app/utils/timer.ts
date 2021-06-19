const timer = (s: number) => {
    return new Promise(resolve => setTimeout(resolve, s))
}

export default timer