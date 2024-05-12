
# 22 Fall - B

## 01

```c:line-numbers
#include <stdio.h>

int is_prime(int x) {
    if (x < 2) return 0;
    for (int i = 2; i <= x/2; i++)
        if (x % i == 0) return 0;
    return 1;
}

int power_of_2(int x) {
    if (x == 0) return 0;
    if (x == 1) return 1;
    if (x % 2) return 0;
    return power_of_2(x / 2);
}

int is_mersenne(int x) {
    return is_prime(x) && power_of_2(x+1);
}

int main() {
    int n; scanf("%d", &n);
    puts(is_mersenne(n) ? "YES" : "NO");
}
```


## 02

:::warning
The question says to add 70 for stage 2 pokemons but the sample adds 70.
The solution follows the question.
:::

```c:line-numbers
#include <stdio.h>

struct card {
    char name[60];
    int stage;
    int HP;
};

int ends_with(char *input, char letter) {
    for (; *input != letter && *input; input++)
        ;
    return *input;
}

int main() {
    int n; scanf("%d", &n);
    struct card ar[n];
    int price = 0;
    for (int i = 0; i < n; i++) {
        scanf(" %[^\n]", ar[i].name);
        scanf("%d", &ar[i].stage);
        scanf("%d", &ar[i].HP);

        price += 50;
        price += ar[i].HP;

        if (ar[i].stage == 1)      price += 30;
        else if (ar[i].stage == 2) price += 70;

        if (ends_with(ar[i].name, 'X')) price += 200;
    }

    printf("%d\n", price);
}
```
