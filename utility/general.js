const formatDate = (date) => {
    return date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

export { formatDate };
