let year = 2025;

if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ) {
    alert(`${year} la nam nhuan`);
} else {
    alert(`${year} khong phai nam nhuan`);
}