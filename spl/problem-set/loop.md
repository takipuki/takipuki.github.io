
# Loop

## 01
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        printf("%d ", i);
    putchar('\n');
}
```

## 02
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int tmp = -1;
    for (int i = 0; i < n; i++)
        printf("%d ", tmp += 2);
    putchar('\n');
}
```

## 03
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int bool = 0;
    for (int i = 0; i < n; i++)
        printf("%d ", bool = !bool);
    putchar('\n');
}
```

## 04
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    float sum = 0, tmp;
    for (int i = 0; i < n; i++) {
        scanf("%f", &tmp);
        sum += tmp;
    }
    printf("Avg of %d inputs: %.2f\n", n, sum/n);
}
```

## 05
```c
#include <stdio.h>

int main() {
    int x, y; scanf("%d%d", &x, &y);

    if (x < y)
        for (; x < y; x++)
            printf("%d, ", x*x);
    else if (x > y)
        for (; x > y; x--)
            printf("%d, ", x*x);

    printf("Reached!\n");
}
```

## 06
```c
#include <stdio.h>

int main() {
    int correct, N, guess;
    scanf("%d%d", &correct, &N);

    for (int i = 1; i <= N; i++) {
        scanf("%d", &guess);
        if (guess == correct) {
            printf("Right, Player-2 wins!\n");
            return 0;
        }
        printf("Wrong, %d chance(s) left!\n", N-i);
    }

    printf("Player-1 wins!\n");
}
```

## 07
```c
#include <stdio.h>

int main() {
    char tmp;
    for (int i = 1; scanf(" %c", &tmp) && tmp != 'A'; i++)
        printf("Input %d: %c\n", i, tmp);
}
```

## 08
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    for (; n; n /= 10)
        printf("%d", n % 10);
    putchar('\n');
}
```

## 09
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        float result = 0, tmp;
        scanf("%f", &tmp);
        result += tmp;
        scanf("%f", &tmp);
        result += tmp;
        scanf("%f", &tmp);
        result += tmp;
        scanf("%f", &tmp);
        result += 30 * tmp / 50;
        scanf("%f", &tmp);
        result += 40 * tmp / 100;

        if (result >= 90 && result <= 100)
            printf("Student %d: A\n", i);
        else if (result >= 86)
            printf("Student %d: A-\n", i);
        else if (result >= 82)
            printf("Student %d: B+\n", i);
        else if (result >= 78)
            printf("Student %d: B\n", i);
        else if (result >= 74)
            printf("Student %d: B-\n", i);
        else if (result >= 70)
            printf("Student %d: C+\n", i);
        else if (result >= 66)
            printf("Student %d: C\n", i);
        else if (result >= 62)
            printf("Student %d: C-\n", i);
        else if (result >= 58)
            printf("Student %d: D+\n", i);
        else if (result >= 55)
            printf("Student %d: D\n", i);
        else if (result < 55)
            printf("Student %d: F\n", i);
    }
}
```

## 10
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int sign = 1, sum = 0;
    for (int i = 1; i <= n; sign = -sign)
        sum += sign * i++;
    printf("Result: %d\n", sum);
}
```

## 11
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int sum = 0;
    for (int i = 1; i <= n; i++) sum += i*i * (i+1);
    printf("Result: %d\n", sum);
}
```

## 12
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int prev = 0, curr = 1, tmp;
    for (int i = 0; i < n; i++) {
        printf("%d ", curr);
        tmp = curr;
        curr = prev+curr;
        prev = tmp;
    }
    putchar('\n');
}
```

## 13
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int fact = 1;
    for (; n; n--) fact *= n;
    printf("%d\n", fact);
}
```

## 14
```c
#include <stdio.h>

int fact(int n) {
    int fact = 1;
    for (; n; n--) fact *= n;
    return fact;
}

int main() {
    int n, r; scanf("%d%d", &n, &r);

    int fact_n = 1;
    for (int i = 1; i <= n; i++)
        fact_n *= i;

    int fact_r = 1;
    for (int i = 1; i <= n; i++)
        fact_r *= i;

    int fact_n_r = 1;
    for (int i = 1; i <= n; i++)
        fact_n_r *= i;

    printf("%d\n", fact_n / (fact_r * fact_n_r));
}
```

## 15
```c
#include <stdio.h>

int main() {
    int x, y; scanf("%d%d", &x, &y);

    int pow = 1;
    for (; y; y--) pow *= x;
    printf("%d\n", pow);
}
```

## 16
```c
#include <stdio.h>

int main() {
    int x, y; scanf("%d%d", &x, &y);

/*
 * the gcd is the largest number <= the smaller of the two
 * that can devide both x and y;
 * so we can start from the smaller one of the two and
 * keep decrementing that value until it can devide the two
 * e.g.
 * x = 12 and y = 9
 * take the smaller one y and begin tesing
 * 9 cannot devide the two; decrement 9
 * 8 cannot devide the two; decrement 8
 * 7 cannot devide the two; decrement 7
 * 6 cannot devide the two; decrement 6
 * 5 cannot devide the two; decrement 5
 * 4 cannot devide the two; decrement 4
 * 3 can devide the two
 * so 3 is the gcd
 */

    // taking the smaller one of the two
    // as the larger one cannot be the gcd
    int gcd = (x < y) ? x : y;
    for (; !(x % gcd == 0 && y % gcd == 0); gcd--);
    //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ^^^^^
    // if gcd cant devide the two^          ^decrement gcd

    printf("GCD: %d\n", gcd);


/*
 * the lcm of x and y has to be the multiple of both x and y;
 * so we can just test the multiples of any one of them (x or y);
 * just check whether the multiples of any one (x or y) is divisible by
 * the other number;
 * e.g.
 * x = 6 and y = 8
 * testing multiples of y
 * y * 1 = 8; 8 not divisible by x
 * go to next multiple of y
 * y * 2 = 16; 16 not divisible by x
 * go to next multiple of y
 * y * 3 = 24; 24 is divisible by x
 * so 24 is the lcm
 */

    // taking the larger one of the two
    // as the smaller one cannot be the lcm
    int max = (x > y) ? x : y; // max
    int lcm = max;
    for (; !(lcm % x == 0 && lcm % y == 0); lcm += max);
    //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^
    // if the two nums cant devide the lcm^ ^go to next multiple
    printf("LCM: %d\n", lcm);
}
```

## 17
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int isprime = (n == 1) ? 0 : 1;
    for (int i = 2; i < n/2; i++)
        if (n % i == 0) isprime = 0;

    (isprime) ? printf("Prime\n") : printf("Not Prime\n");
}
```

## 18
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    
    int original = n;
    int reverse  = 0;
    while (n > 0) {
        reverse = (reverse * 10) + (n % 10);
        // n = 123       0 * 10  +  123 % 10 = 0   + 3 = 3
        // n = 12        3 * 10  +  12  % 10 = 30  + 2 = 32
        // n = 1        32 * 10  +  1   % 10 = 320 + 1 = 321
        n /= 10;
    }

    if (original == reverse)
        printf("Yes\n");
    else
        printf("No\n");
}
```

## 19
```c
#include <stdio.h>

int main() {
    int x; scanf("%d", &x);

    long double result = 0;
    int sign = 1;

    for (int i = 1; i <= 20; i += 2) {
        long long fact = 1;
        for (int j = 2; j <= i; j++)
            fact *= j;

        long long pow = 1;
        for (int j = 1; j <= i; j++)
            pow *= x;

        result += sign * (double)pow/fact;
        sign = -sign;
    }

    printf("%.3Lf\n", result);
}
```

## 20
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int sum = 0;
    int curr = 0;
    for (int i = 1; i <= n; i++) {
        curr = curr*10 + i;
        sum += curr;
    }

    printf("%d\n", sum);
}
```

