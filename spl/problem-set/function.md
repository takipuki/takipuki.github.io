
# Function

## 01
```c:line-numbers
#include <stdio.h>

void message() {
    printf("Hello world!\n");
}

int main() {
    message();
}
```

## 02
```c:line-numbers
#include <stdio.h>

void character(char ch) {
    putchar(ch);
}

int main() {
    char ch = getchar();
    character(ch);
}
```

## 03
```c:line-numbers
#include <stdio.h>

int sum_of(int n) {
    int sum = 0, tmp;
    for (int i = 0; i < n; i++) {
        scanf("%d", &tmp);
        sum += tmp;
    }
    printf("Sum in func: %d\n", sum);
    return sum;
}

int main() {
    int n; scanf("%d", &n);
    int sum = sum_of(n);
    printf("Sum in main: %d\n", sum);
}
```

## 04
```c:line-numbers
#include <stdio.h>

int sum_of_arr(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++)
        sum += arr[i];
    printf("Sum in func: %d\n", sum);
    return sum;
}

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);
    int sum = sum_of_arr(arr, n);
    printf("Sum in main: %d\n", sum);
}
```

## 05
```c:line-numbers
#include <stdio.h>

int swap(int a, int b) {
    int tmp = a;
    a = b;
    b = tmp;
    printf("Value in func: %d %d\n", a, b);
}

int main() {
    int a, b; scanf("%d %d", &a, &b);
    swap(a, b);
    printf("Value in main: %d %d\n", a, b);
}
```

## 06
```c:line-numbers
#include <stdio.h>

int swap(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
    printf("Value in func: %d %d\n", *a, *b);
}

int main() {
    int a, b; scanf("%d %d", &a, &b);
    swap(&a, &b);
    printf("Value in main: %d %d\n", a, b);
}
```

## 07
```c:line-numbers
#include <stdio.h>

void print_evens(int arr[], int size) {
    for (int i = 0; i < size; ++i)
        if (arr[i] % 2 == 0)
            printf("%d ", arr[i]);
    putchar('\n');
}

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);
    print_evens(arr, n);
}
```

## 08
```c:line-numbers
#include <stdio.h>

int min(int arr[], int size) {
    if (size <= 0) return 0;
    int m = arr[0];
    for (int i = 1; i < size; ++i)
        if (arr[i] < m) m = arr[i];
    return m;
}

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);

    printf("Minimum value: %d\n", min(arr, n));
}
```

## 09
```c:line-numbers
#include <stdio.h>

int* doub(int *arr, int size) {
    for (int i = 0; i < size; ++i)
        arr[i] *= 2;
    return arr;
}

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);
    doub(arr, n);
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    putchar('\n');
}
```

## 10
```c:line-numbers
#include <stdio.h>

int* sort(int *arr, int size) {
    if (size <= 1) return arr;
    int pivot = 0;
    for (int i = 1; i < size; i++) {
        if (arr[i] < arr[pivot]) {
            int tmp = arr[i];
            arr[i] = arr[pivot];
            arr[pivot] = tmp;

            pivot++;
            tmp = arr[pivot];
            arr[pivot] = arr[i];
            arr[i] = tmp;
        }
    }
    sort(arr, pivot);
    sort(arr+pivot+1, size-(pivot+1));
    return arr;
}

int main() {
    int size; scanf("%d", &size);
    int arr[size];
    for (int i = 0; i < size; i++) scanf("%d", arr+i);
    sort(arr, size);
    for (int i = 0; i < size; i++) printf("%d ", arr[i]);
    putchar('\n');
}
```

## 11
```c:line-numbers
#include <stdio.h>

int is_prime(int n) {
    if (n <= 1) return 0;
    for (int i = 2, til = n-1; i <= til; til = n / i, i++)
        if (n % i == 0) return 0;
    return 1;
}

int main() {
    int n; scanf("%d", &n);
    if (is_prime(n))
        printf("Prime\n");
    else
        printf("Not Prime\n");
}
```

## 12
```c:line-numbers
#include <stdio.h>

int is_prime(int n) {
    if (n <= 1) return 0;
    for (int i = 2, til = n-1; i <= til; til = n / i, i++)
        if (n % i == 0) return 0;
    return 1;
}

void gen_primes(int n) {
    if (n <= 2) return;
    printf("2");
    for (int i = 3; i < n; i++)
        if (is_prime(i)) printf(", %d", i);
    putchar('\n');
}

int main() {
    int n; scanf("%d", &n);
    printf("Primes less than %d: ", n);
    gen_primes(n);
}
```

## 13
```c:line-numbers
#include <stdio.h>

int is_prime(int n) {
    if (n <= 1) return 0;
    for (int i = 2, til = n-1; i <= til; til = n / i, i++)
        if (n % i == 0) return 0;
    return 1;
}

int nth_prime(int n) {
    int prime;
    for (int i = 2, count = 0; count < n; i++)
        if (is_prime(i)) {
            prime = i;
            count++;
        }
    return prime;
}

int main() {
    int n; scanf("%d", &n);
    printf("%dth prime: %d\n", n, nth_prime(n));
}
```

## 14
```c:line-numbers
#include <stdio.h>
#include <math.h>

void input(int *arr, int size) {
    for (int i = 0; i < size; i++)
        scanf("%d", arr+i);
}

float calc_mean(int *arr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++)
        sum += arr[i];
    return (float)sum/size;
}

float calc_sd(int *arr, int size) {
    float mean = calc_mean(arr, size);
    float sum_sq_of_divs = 0;
    for (int i = 0; i < size; i++)
        sum_sq_of_divs += pow(mean - arr[i], 2);
    float variance = sum_sq_of_divs / size;
    return sqrt(variance);
}

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);
    printf("%.2f\n", calc_sd(arr, n));
}
```

## 15
```c:line-numbers
#include <stdio.h>

int is_substr(char *a, char *b) {
    for (; *a != '\0'; a++) {
        if (*a == *b) {
            int flag = 1;
            char *aa, *bb;
            for (aa = a+1, bb = b+1; *aa != '\0' && *bb != '\0'; aa++, bb++)
                if (*aa != *bb) {
                    flag = 0;
                    break;
                }
            if (*aa == '\0' && *bb != '\0') // reached end of a but not b
                flag = 0;

            if (flag) return 1;
        }
    }
    return 0;
}

int main() {
    char a[100], b[100];
    scanf("%[^\n]%*c", a);
    scanf("%[^\n]%*c", b);

    printf("%d\n", is_substr(a, b));
}
```

## 16
```c:line-numbers
#include <stdio.h>

int str_len(char *a) {
    int i;
    for (i = 0; a[i] != '\0'; i++);
    return i;
}

int is_substr(char *a, char *b) {
    if (str_len(a) < str_len(b)) {
        char *tmp = a;
        a = b;
        b = tmp;
    }
    for (; *a != '\0'; a++) {
        if (*a == *b) {
            int flag = 1;
            for (char *aa = a+1, *bb = b+1; *aa != '\0' && *bb != '\0'; aa++, bb++)
                if (*aa != *bb) {
                    flag = 0;
                    break;
                }

            if (flag) return 1;
        }
    }
    return 0;
}

int main() {
    char a[100], b[100];
    scanf("%s", a);
    scanf("%s", b);
    printf("%d\n", is_substr(a, b));
}
```

## 17
```c:line-numbers
#include <stdio.h>

int gcd(int a, int b) {
    int min = (a < b) ? a : b;
    for (; min > 1; min--)
        if (a % min == 0 && b % min == 0) return min;
    return 1;
}

int lcm(int a, int b) {
    int max;
    if (a < b) max = b;
    else {
        max = a;
        int tmp = a;
        a = b;
        b = tmp;
    }
    for (; b % a != 0; b += max);
    return b;
}

int main() {
    int a, b;
    while (scanf("%d %d", &a, &b) != EOF) {
        printf("GCD: %d\n", gcd(a, b));
        printf("LCM: %d\n", lcm(a, b));
    }
}
```

## 18
```c:line-numbers
#include <stdio.h>

void input_matrix(int *mat, int m, int n) {
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", mat+(i*n) + j);
}

void show_matrix(int *mat, int m, int n) {
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%3d ", mat[(i*n) + j]);
        putchar('\n');
    }
}

void scalar_multiply(int *mat, int m, int n, int k) {
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            mat[(i*n) + j] *= k;
}

int main() {
    int m = 3, n = 5;
    int mat[m*n];
    input_matrix(mat, m, n);
    int k; scanf("%d", &k);

    puts("Original:");
    show_matrix(mat, m, n);
    scalar_multiply(mat, m, n, k);
    printf("Multiplied by %d:\n", k);
    show_matrix(mat, m, n);
}
```

## 19
```c:line-numbers
#include <stdio.h>

void input_matrix(int *mat, int m, int n) {
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", mat+(i*n) + j);
}

void show_matrix(int *mat, int m, int n) {
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%3d ", mat[(i*n) + j]);
        putchar('\n');
    }
}

void scalar_multiply(int *mat, int m, int n, int k) {
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            mat[(i*n) + j] *= k;
}

int main() {
    int m, n; scanf("%d%d", &m, &n);
    int mat[m*n];
    input_matrix(mat, m, n);
    int k; scanf("%d", &k);

    puts("Original:");
    show_matrix(mat, m, n);
    scalar_multiply(mat, m, n, k);
    printf("Multiplied by %d:\n", k);
    show_matrix(mat, m, n);
}
```

## 20
```c:line-numbers
#include <stdio.h>
#include <math.h>

char symbols[16]; // maximum base 16; digits (0-9) and alpha (A-F)

void convert(int n, int base, char *reversed) {
    if (n <= 0) {
        reversed[0] = '\0';
        return;
    }

    *reversed = symbols[n % base];
    convert(n/base, base, reversed+1);
}

int get_num_and_base(int *n, int *base) {
    scanf("%d%d", n, base);
    if (*base < 2 || *base > 16) {
        printf("Base not within proper range!\n");
        return 0;
    }
    return 1;
}

void show_converted(char *reversed) {
    if (*reversed == '\0') return;
    show_converted(reversed+1);
    putchar(*reversed);
}

int main(void) {
    int n, base;
    if (!get_num_and_base(&n, &base)) return 0;

    if (n <= 0) {
        puts("0");
        return 0;
    }

    // initializing symbols
    for (int i = 0; i < base; i++)
        symbols[i] = (i >= 10) ? 'A' + i-10 : '0' + i;

    char reversed[(int)ceil(log(n+1)/log(base)) + 1];
    convert(n, base, reversed);
    show_converted(reversed);
    putchar('\n');
}
```

