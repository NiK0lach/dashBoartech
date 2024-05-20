export function generateCouponCode(title, expiryDate) {
    // Convert title to uppercase and remove spaces
    const formattedTitle = title.toUpperCase().replace(/\s/g, '');

    // Format expiry date as DDMMYYYY
    const formattedExpiryDate = expiryDate
    .split("-")
    .reverse()
    .join("");

    // Concatenate title and formatted expiry date with a hyphen
  const couponCode = `${formattedTitle}-${formattedExpiryDate}`;

    return couponCode;
}