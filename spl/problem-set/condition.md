
# Condition

## 01
```c
#include <stdio.h>

int main() {
    float n;
    scanf("%f", &n);
    (n < 0) ? printf("Negative\n") : printf("Positive\n");
}
```

## 02
```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    (n % 2 == 0) ? printf("Even\n") : printf("Odd\n");
}
```

## 03
```c
#include <stdio.h>

int main() {
    int dig;
    scanf("%d", &dig);

    switch (dig) {
    case 0:
        printf("zero\n");
        break;
    case 1:
        printf("one\n");
        break;
    case 2:
        printf("two\n");
        break;
    case 3:
        printf("three\n");
        break;
    case 4:
        printf("four\n");
        break;
    case 5:
        printf("five\n");
        break;
    case 6:
        printf("six\n");
        break;
    case 7:
        printf("seven\n");
        break;
    case 8:
        printf("eight\n");
        break;
    case 9:
        printf("nine\n");
        break;
    }
}
```

## 04
```c
#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    if (a+b+c == 180 && a*b*c > 0)
        printf("Yes\n");
    else
        printf("No\n");
}
```

## 05
```c
#include <stdio.h>
#include <math.h>

int main() {
    int n;
    scanf("%d", &n);

    int p = log2(n);
    int q = 1;
    for (int i = 0; i < p; i++) q *= 2;
    if (q == n)
        printf("Yes\n");
    else
        printf("No\n");
}
```

## 06
```c
#include <stdio.h>
#include <math.h>

int main() {
    int n; scanf("%d", &n);

    if (!n) {
        printf("Zero not valid!\n");
        return 0;
    } else if (n < 0) {
        printf("Negative not valid!\n");
        return 0;
    }

    int p = log2(n);
    int q = 1;
    for (int i = 0; i < p; i++) q *= 2;
    if (q == n)
        printf("Yes\n");
    else
        printf("No\n");
}
```

## 07
```c
#include <stdio.h>

int main() {
    int x, y;
    scanf("%d %d", &x, &y);

    if (x > y)
        printf("%d is greater than %d\n", x, y);
    else if (x < y)
        printf("%d is less than %d\n", x, y);
    else
        printf("%d is equal to %d\n", x, y);
}
```

## 08
```c
#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);

    ((year%4 == 0 && year%100 != 0) || (year%400 == 0)) ?
        printf("Yes\n") : printf("No\n");
}
```

## 09
```c
#include <stdio.h>

int main() {
    char ch;
    scanf(" %c", &ch);

    if (ch >= '0' && ch <= '9')
        printf("Digit\n");
    else if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
        printf("Alphabet\n");
    else
        printf("Special\n");
}
```

## 10
```c
#include <stdio.h>

int main() {
    float a, b;
    char op;
    scanf("%f %c %f", &a, &op, &b);

    switch (op) {
    case '+':
        printf("Addition: %.2f\n", a+b);
        break;
    case '-':
        printf("Substraction: %.2f\n", a-b);
        break;
    case '*':
        printf("Multiplication: %.2f\n", a*b);
        break;
    case '/':
        printf("Division: ");
        if (!b) {
            printf("Zero as divisor is not valid!\n");
            return 0;
        }
        printf("%.2f\n", a/b);
        break;
    }
}
```

## 11
```c
#include <stdio.h>

int main() {
    float marks;
    scanf("%f", &marks);

    if (marks >= 90 && marks <= 100)
        printf("Grade: A\n");
    else if (marks >= 86)
        printf("Grade: A-\n");
    else if (marks >= 82)
        printf("Grade: B+\n");
    else if (marks >= 78)
        printf("Grade: B\n");
    else if (marks >= 74)
        printf("Grade: B-\n");
    else if (marks >= 70)
        printf("Grade: C -n+\n");
    else if (marks >= 66)
        printf("Grade: C -n\n");
    else if (marks >= 62)
        printf("Grade: C -n-\n");
    else if (marks >= 58)
        printf("Grade: D+\n");
    else if (marks >= 55)
        printf("Grade: D\n");
    else if (marks < 55)
        printf("Grade: F\n");
}
```

## 12
```c
#include <stdio.h>

int main() {
    float a, b;
    int op;
    scanf("%f %f %d", &a, &b, &op);

    switch (op) {
    case 1:
        printf("Addition: %.2f\n", a+b);
        break;
    case 2:
        printf("Substraction: %.2f\n", a-b);
        break;
    case 3:
        printf("Multiplication: %.2f\n", a*b);
        break;
    case 4:
        printf("Quotient: %d\n", (int)(a/b));
        break;
    }
}
```

## 13
```c
#include <stdio.h>

int main() {
    float a, b;
    int op;
    scanf("%f %f %d", &a, &b, &op);

    switch (op) {
    case 1:
        printf("Addition: %.2f\n", a+b);
        break;
    case 2:
        printf("Substraction: %.2f\n", a-b);
        break;
    case 3:
        printf("Multiplication: %.2f\n", a*b);
        break;
    case 4:
        scanf("%d", &op);
        switch (op) {
        case 1:
            printf("Quotient: %d\n", (int)(a/b));
            break;
        case 2:
            printf("Remainder: %d\n", (int)a % (int)b);
            break;
        }
        break;
    }
}
```

## 14
```c
#include <stdio.h>

int main() {
    float a, b;
    int op;
    scanf("%f %f %d", &a, &b, &op);

    switch (op) {
    case 1:
        printf("Addition: %.2f\n", a+b);
        break;
    case 2:
        printf("Substraction: %.2f\n", a-b);
        break;
    case 3:
        printf("Multiplication: %.2f\n", a*b);
        break;
    case 4:
        if (!b) {
            printf("Error: Divisor is zero\n");
            return 0;
        }

        scanf("%d", &op);
        switch (op) {
        case 1:
            printf("Quotient: %d\n", (int)(a/b));
            break;
        case 2:
            printf("Remainder: %d\n", (int)a % (int)b);
            break;
        }
        break;
    }
}
```

## 15
```c
#include <stdio.h>

int main() {
    int correct, guess;
    scanf("%d", &correct);

    scanf("%d", &guess);
    if (guess == correct) {
        printf("Right. Player-2 wins!\n");
        return 0;
    }
    printf("Wrong, 2 chances left!\n");

    scanf("%d", &guess);
    if (guess == correct) {
        printf("Right. Player-2 wins!\n");
        return 0;
    }
    printf("Wrong, 1 chances left!\n");
    
    scanf("%d", &guess);
    if (guess == correct) {
        printf("Right. Player-2 wins!\n");
        return 0;
    }

    printf("Player-1 wins!\n");
}
```

