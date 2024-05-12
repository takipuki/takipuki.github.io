---
prev: false
next: false
---

# Lab

## Assignment - 01

### Problem - 01
```c:line-numbers
#include <stdio.h>

int main() {
    int units;
    scanf("%d", &units);

    float cost = 0;

    if (units <= 50) {
        cost += units * 0.5;
        goto end;
    }

    cost += 50 * 0.5;
    units -= 50;
    if (units <= 100) {
        cost += units * 0.75;
        goto end;
    }

    cost += 100 * 0.75;
    units -= 100;
    if (units <= 100) {
        cost += units * 1.2;
        goto end;
    }

    cost += 100 * 1.2;
    units -= 100;
    cost += units * 1.5;

 end:
    printf("%.2f\n", cost + cost*0.2);
}
```

### Problem - 02
```c:line-numbers
#include <stdio.h>
#include <math.h>

#define ERROR_MARGIN 0.1

int main() {
    // e.g.
    // indx:  0 1   2 3    4 5
    // cord: (1,1) (3,5) (-5,5)
    double tri_cords[3*2];
    for (int i = 0; i < 3; i++)
        scanf("%lf %lf", tri_cords + i*2, tri_cords + i*2 + 1);

    // sides
    double a = sqrt(pow(tri_cords[0] - tri_cords[2], 2)
                    + pow(tri_cords[1] - tri_cords[3], 2));
    double b = sqrt(pow(tri_cords[2] - tri_cords[4], 2)
                    + pow(tri_cords[3] - tri_cords[5], 2));
    double c = sqrt(pow(tri_cords[0] - tri_cords[4], 2)
                    + pow(tri_cords[1] - tri_cords[5], 2));

    // checking invalid
    if ((a + b <= c) || (b + c <= a) || (c + a <= b)) {
        printf("Invalid\n");
        return 0;
    }

    if (fabs(a - b) <= ERROR_MARGIN
        && fabs(b - c) <= ERROR_MARGIN
        && fabs(c - a) <= ERROR_MARGIN)
        printf("Equilateral\n");
    else if (fabs(a - b) <= ERROR_MARGIN
             || fabs(b - c) <= ERROR_MARGIN
             || fabs(c - a) <= ERROR_MARGIN)
        printf("Isosceles\n");
    else
        printf("Scalene\n");
}
```

### Problem - 03
```c:line-numbers
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int sum = 0;
    for (int i = 1; i <= n/2; i++)
        if (n % i == 0)
            sum += i;

    if (n == sum)
        printf("Yes\n");
    else
        printf("No\n");
}
```


## Assignment - 02

### Problem - 01
```c:line-numbers
#include <stdio.h>
 
int main() {
    int n;
    printf("Size: ");
    scanf("%d", &n);

    int arr[n];
    printf("Array: ");
    for (int i = 0; i < n; i++)
        scanf("%d", arr+i);
 
    printf("Leaders: ");
    for (int i = 0; i < n; i++) {
        int flag = 1;
        for (int j = i+1; j < n; j++)
            if (arr[j] > arr[i]) {
                flag = 0;
                break;
            }
        if (flag)
            printf("%d ", arr[i]);
    }
    putchar('\n');
}
```

### Problem - 02
```c:line-numbers
#include <stdio.h>
 
int main() {
    int n; scanf("%d", &n);

    int arr[n];
    for (int i = 0; i < n; i++)
        scanf("%d", arr+i);
 
    int a, b; scanf("%d%d", &a, &b);
 
    // sorting indices 0 -> a
    for (int i = 0; i <= a; i++) {
        for (int j = 1; j <= a-i; j++) {
            if (arr[j-1] > arr[j]) {
                int tmp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    
    // sorting indices b -> (n-1)
    for (int i = b; i < n; i++) {
        for (int j = b+1; j < n - (i-b); j++) { // (i-b) is the number
            if (arr[j-1] < arr[j]) {            // of already sorted
                int tmp = arr[j-1];             // elements at the end
                arr[j-1] = arr[j];              // of the array
                arr[j] = tmp;
            }
        }
    }
 
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    putchar('\n');
}
```


## Assignment - 03

### Problem - 01
```c:line-numbers
#include <stdio.h>

/*
  abcd ef bcd
  z
  bcd

  az ef z
 */

int main() {
    char s[100];
    int len;
    for (len = 0; (s[len] = getchar()) != '\n'; len++);
    s[len] = '\0';

    char c = getchar();
    getchar(); // skip newline

    char b[100];
    int blen;
    for (blen = 0; (b[blen] = getchar()) != '\n'; blen++);
    b[blen] = '\0';

    for (int i = 0; i < len-(blen-1); i++) {
        if (s[i] == b[0]) {
            int flag = 1;
            for (int j = 1; j < blen; j++) {
                if (s[i+j] != b[j]) {
                    flag = 0;
                    break;
                }
            }

            if (flag) { // substring found
                s[i] = c;
                for (int j = i+blen; j <= len; j++) // <= because include '\0'
                    s[j-(blen-1)] = s[j];

                len -= blen-1;
            }
        }
    }

    puts(s);
}
```

### Problem - 02
```c:line-numbers
#include <stdio.h>

int is_prime(int n) {
    if (n < 2) return 0;
    for (int i = 2, lim = n; i < lim; lim /= i++)
        if (n % i == 0) return 0;
    return 1;
}

int is_pal(int n) {
    int rev = 0;
    for (int i = n; i > 0; i /= 10)
        rev = rev*10 + i%10;
    return n == rev;
}

int sum_of_digs(int n) {
    int sum = 0;
    for (; n > 0; n /= 10)
        sum += n%10;
    return sum;
}

int main() {
    int n; scanf("%d", &n);
    if (is_pal(n) && is_prime(n) && is_prime(sum_of_digs(n)))
        printf("Yes\n");
    else
        printf("No\n");
}
```
