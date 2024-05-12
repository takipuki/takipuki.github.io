---
prev: false
---

# 22 Fall - A

## 01

```c:line-numbers
#include <stdio.h>

int is_prime(int x) {
    if (x < 2) return 0;
    for (int i = 2; i <= x/2; i++)
        if (x % i == 0) return 0;
    return 1;
}

int digit_sum(unsigned int x) {
    if (x == 0) return 0;
    return x % 10 + digit_sum(x / 10);
}

int is_superprime(int x) {
    return is_prime(x) && is_prime(digit_sum(x));
}

int main() {
    int a, b; scanf("%d%d", &a, &b);
    for (; a <= b; a++)
        if (is_superprime(a)) printf("%d\n", a);
}
```


## 02

```c:line-numbers
#include <stdio.h>

struct program {
    char name[60];
    int total_memory;
    int used_memory;
};

int all_caps(char *input) {
    for (; *input >= 'A' && *input <= 'Z' && *input; input++)
        ;
    return !*input;
}

int main() {
    int n; scanf("%d", &n);
    struct program ar[n];
    int virs[n], count = 0;
    for (int i = 0; i < n; i++) {
        scanf(" %s", ar[i].name);
        scanf("%d", &ar[i].total_memory);
        scanf("%d", &ar[i].used_memory);

        if (ar[i].used_memory >= ar[i].total_memory && all_caps(ar[i].name))
            virs[count++] = i;
    }

    printf("%d\n", count);
    for (int i = 0; i < count; i++)
        puts(ar[virs[i]].name);
}
```
