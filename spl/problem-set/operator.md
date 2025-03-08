
# Operator

## 01
```c
#include <stdio.h>

int main() {
    float x, y;
    scanf("%f %f", &x, &y);

    printf("Addition: %.2f\n", x+y);
    printf("Substraction: %.2f\n", x-y);
    printf("Multiplication: %.2f\n", x*y);
    printf("Quotient: %d\n", (int)(x/y));
    printf("Remainder: %d\n", (int)x % (int)y);
}
```

## 02
```c
#include <stdio.h>

int main() {
    float r;
    scanf("%f", &r);
    printf("Area: %.2f\n", 2*3.14159*r);
}
```

## 03
```c
#include <stdio.h>

int main() {
    float a, b;
    scanf("%f%f", &a, &b);
    printf("x = %f\n", (3.31 * a*a + 2.01 * b*b*b) / (7.16 * b*b + 2.01 * a*a*a));
}
```

## 04
```c
#include <stdio.h>

int main() {
    int x;
    scanf("%d", &x);

    int tmp = x;
    printf("%d\n", tmp++);
    tmp = x;
    printf("%d\n", ++tmp);
    tmp = x;
    printf("%d\n", tmp--);
    tmp = x;
    printf("%d\n", --tmp);
}
```

## 05
```c
#include <stdio.h>

int main() {
    int x, y;
    scanf("%d%d", &x, &y);

    int tmp = x;
    printf("Incremented value: %d\n", tmp += y);
    tmp = x;
    printf("Decremented value: %d\n", tmp -= y);
}
```

## 06
```c
#include <stdio.h>

int main() {
    int x, y;
    scanf("%d%d", &x, &y);

    int tmp = x;
    printf("Multiplication: %d\n", tmp *= y);
    tmp = x;
    printf("Division: %d\n", tmp /= y);
}
```

## 07
```c
#include <stdio.h>

int main() {
    int i;
    float f;
    scanf("%d %f", &i, &f);

    float floati = i;
    int intf = f;

    printf("Assignment: %f assigned to an int produces %d\n", f, intf);
    printf("Assignment: %d assigned to an int produces %f\n", i, floati);

    printf("Types casting: (float) %d produces %f\n", i, floati);
    printf("Types casting: (int) %f produces %d\n", f, intf);
}
```

## 08
```c
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d%d", &a, &b);
    (a > b) ? printf("Max: %d\n", a) : printf("Max: %d\n", b);
}
```

## 09
```c
#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    printf("x = %d\n", a - b / 3 + c * 2 - 1);
    printf("y = %d\n", a - (b / ( 3 + c ) * 2) - 1);
    printf("z = %d\n", a - ((b / 3) + c * 2) - 1);
}
```

## 10
```c
#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);

    printf("a) %d\n", (a+b) <= 80);
    printf("b) %d\n", !(a+b));
    printf("c) %d\n", c != 0);
}
```

## 11
```c
#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);

    printf("1) %d\n", (a+b) <= 80 && c >= 0);
    printf("2) %d\n", (a-b) == 0 || c != 0);
    printf("3) %d\n", a != b || !(b < c) && c > 0);
    printf("4) %d\n", (a != b || !(b < c)) && c > 0);
}
```

## 12
```c
#include <stdio.h>
#include <math.h>

int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);

    int discriminant = b*b - 4*a*c;
    if (discriminant < 0) {
        printf("Imaginary\n");
        return 0;
    }

    float x1 = (-b + sqrt(discriminant)) / (2*a);
    float x2 = (-b - sqrt(discriminant)) / (2*a);
    printf("%.2f %.2f\n", x1, x2);
}
```

## 13
```c
#include <stdio.h>
#include <math.h>

int main() {
    float x;
    scanf("%f", &x);

    float rads = x * 3.14159 / 180;
    printf("%f\n", 2*cos(rads)*cos(rads)
                   - sqrt(3)*sin(sin(rads))
                   + log10(x/2));
}
```

## 14
```c
#include <stdio.h>

int main() {
    float x; scanf("%f", &x);

    int ceil, floor; float abs;
    if (x >= 0) {
        ceil  = ((int)x == x) ? x : (x+1);
        floor = (int)x;
        abs = x;
    } else {
        ceil  = (int)x;
        floor = ((int)x == x) ? x : (x-1);
        abs = -x;
    }

    printf("A = %d, B = %d, C = %.2f\n", ceil, floor, abs);
}
```

## 15
```c
#include <stdio.h>

int main() {
    printf("Size of int in byte(s)    = %lu\n", sizeof(int));
    printf("Size of float in byte(s)  = %lu\n", sizeof(float));
    printf("Size of double in byte(s) = %lu\n", sizeof(double));
    printf("Size of char in byte(s)   = %lu\n", sizeof(char));
}
```

