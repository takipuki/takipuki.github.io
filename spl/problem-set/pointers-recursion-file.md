
# Pointers-Recursion-File

## 01
```c:line-numbers
#include <stdio.h>

int main() {
    int a, b; scanf("%d %d", &a, &b);
    int *aptr = &a, *bptr = &b;
    printf("%d\n", *aptr + *bptr);
}
```


## 02
```c:line-numbers
#include <stdio.h>

int main() {
    int a, b; scanf("%d %d", &a, &b);
    int *aptr = &a, *bptr = &b;
    printf("%d\n", *aptr > *bptr ? *aptr : *bptr);
}
```


## 03
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int ar[n];
    for (int i = 0; i < n; i++) scanf("%d", ar+i);

    for (int *ptr = ar; n; n--, ptr++) printf("%d ", *ptr);
    putchar('\n');
}
```


## 04
```c:line-numbers
#include <stdio.h>

int main() {
    char str[100] = {0};
    scanf("%[^\n]", str);
    int len = 0;
    for (char *s = str; *s != '\0'; len++, s++);
    printf("%d\n", len);
}
```


## 05
```c:line-numbers
#include <stdio.h>

int main() {
    int a, b; scanf("%d %d", &a, &b);
    printf("%d %d\n", a, b);
    int *aptr = &a, *bptr = &b;
    int tmp = *aptr;
    *aptr = *bptr;
    *bptr = tmp;
    printf("%d %d\n", a, b);
}
```


## 06
```c:line-numbers
#include <stdio.h>

char* str_chr(char *s, char c) {
    for (; *s; s++) if (*s == c) return s;
    return NULL;
}

int is_alpha(char c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

int main() {
    char str[100] = {0};
    scanf("%[^\n]", str);
    int v = 0, c = 0;
    for (char *s = str; *s != '\0'; s++) {
        if (str_chr("aeiouAEIOU", *s))
            v++;
        else if (is_alpha(*s))
            c++;
    }
    printf("vowels     = %d\n", v);
    printf("consonants = %d\n", c);
}
```


## 07
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int ar[n];
    for (int i = 0; i < n; i++)
        scanf("%d", ar+i);

    int sum = 0;
    for (int *ptr = ar; n; n--, ptr++)
        sum += *ptr;
    printf("%d\n", sum);
}
```


## 08
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int ar[n];
    for (int i = 0; i < n; i++)
        scanf("%d", ar+i);

    for (int *ptr = ar+n-1; n; n--, ptr--)
        printf("%d ", *ptr);
    putchar('\n');
}
```


## 09
```c:line-numbers
#include <stdio.h>

void solve(int n) {
    if (n > 10) return;
    printf("%d ", n);
    solve(n+1);
}

int main() {
    solve(1);
    putchar('\n');
}
```


## 10
```c:line-numbers
#include <stdio.h>

int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n-1);
}

int main() {
    int n; scanf("%d", &n);
    printf("%d\n", sum(n));
}
```


## 11
```c:line-numbers
#include <stdio.h>

int fib(int n) {
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fib(n-1) + fib(n-2);
}

void print_fib(int n) {
    if (n == 0) return;
    print_fib(n-1);
    printf("%d ", fib(n));
}

int main() {
    int n; scanf("%d", &n);
    print_fib(n);
    putchar('\n');
}
```


## 12
```c:line-numbers
#include <stdio.h>

void print_arr(int *ar, int n) {
    if (n == 0) return;
    printf("%d ", *ar);
    print_arr(ar+1, n-1);
}

int main() {
    int n; scanf("%d", &n);
    int ar[n];
    for (int i = 0; i < n; i++)
        scanf("%d", ar+i);

    print_arr(ar, n);
    putchar('\n');
}
```


## 13
```c:line-numbers
#include <stdio.h>

int digs(int n) {
    if (n < 10) return 1;
    return 1 + digs(n/10);
}

int main() {
    int n; scanf("%d", &n);
    printf("%d\n", digs(n));
}
```


## 14
```c:line-numbers
#include <stdio.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int max_arr(int *ar, int n) {
    if (n == 0) return 0;
    return max(*ar, max_arr(ar+1, n-1));
}

int main() {
    int n; scanf("%d", &n);
    int ar[n];
    for (int i = 0; i < n; i++)
        scanf("%d", ar+i);

    printf("%d\n", max_arr(ar, n));
}
```


## 15
```c:line-numbers
#include <stdio.h>

void print_every_other(int n) {
    if (n < 1) return;
    print_every_other(n-2);
    printf("%d ", n);
}

int main() {
    int n; scanf("%d", &n);
    print_every_other(n);
    putchar('\n');
}
```


## 16
```c:line-numbers
#include <stdio.h>

int is_pal(char *s, int len) {
    if (len < 2) return 1;
    if (*s != *(s+len-1)) return 0;
    return is_pal(s+1, len-2);
}

int main() {
    char str[100];
    int len;
    for (len = 0; (str[len] = getchar()) != '\n'; len++);

    if (is_pal(str, len))
        puts("YES");
    else
        puts("NO");
}
```


## 17
```c:line-numbers
#include <stdio.h>

int main() {
    FILE *fileptr = fopen("sample.txt", "w");
    fprintf(fileptr, "1 Zahid\n");
    fprintf(fileptr, "2 Tanvir\n");
    fprintf(fileptr, "3 Akif\n");
    fclose(fileptr);
}
```


## 18
```c:line-numbers
#include <stdio.h>

int main() {
    FILE *fileptr = fopen("sample.txt", "r");
    char buf[100];
    for (; fgets(buf, 100, fileptr););
    fclose(fileptr);
}
```


## 19
```c:line-numbers
#include <stdio.h>

int main() {
    FILE *fileptr = fopen("sample.txt", "r");
    char buf[100];
    for (; fgets(buf, 100, fileptr);)
        printf("%s", buf);
    fclose(fileptr);
}
```


## 20
```c:line-numbers
#include <stdio.h>

int main() {
    FILE *fileptr = fopen("sample.txt", "r");
    char buf[100];
    int count = 0;
    for (; fgets(buf, 100, fileptr); count++);
    printf("%d\n", count);
    fclose(fileptr);
}
```


## 21
```c:line-numbers
#include <stdio.h>

int main() {
    FILE *fileptr = fopen("sample.txt", "a");
    fprintf(fileptr, "4 Shadman\n");
    fprintf(fileptr, "5 Miraz\n");
    fclose(fileptr);
}
```


