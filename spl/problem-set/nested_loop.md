
# Nested Loop

## 01
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= n; j++)
            printf("%d", j);
        putchar('\n');
    }
}
```


## 02
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        int start = i;
        for (int j = 0; j < n; j++)
            printf("%d", start++);
        putchar('\n');
    }
}
```


## 03
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        int start = i;
        for (int j = 0; j < i; j++)
            printf("%d", start++);
        putchar('\n');
    }
}
```


## 04
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n-i; j++) putchar(' ');
        for (int j = 0; j < i  ; j++) printf("%d", i);
        putchar('\n');
    }
}
```


## 05
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        int start = n;
        for (int j = 0; j < i; j++)
            printf("%d", start--);
        putchar('\n');
    }
}
```


## 06
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("%d", j);
        putchar('\n');
    }
}
```


## 07
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            putchar('*');
        putchar('\n');
    }
}
```


## 08
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = n; i >= 1; i--) {
        for (int j = 0; j < i; j++)
            putchar('*');
        putchar('\n');
    }
}
```


## 09
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        int start = i % 2;
        for (int j = 0; j < n; j++) {
            printf("%d", start);
            start = !start;
        }
        putchar('\n');
    }
}
```


## 10
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n-i; j++) putchar(' ');
        for (int j = 0; j < i  ; j++) putchar('*');
        putchar('\n');
    }
}
```


## 11
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n-i; j++) putchar(' ');
        for (int j = 0; j < i  ; j++) putchar('*');
        for (int j = 0; j < i-1; j++) putchar('*');
        putchar('\n');
    }
}
```


## 12
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    // top half + middle line
    int loop = n/2+1;
    for (int i = 1; i <= loop; i++) {
        for (int j = 0; j < loop-i; j++) putchar(' ');
        for (int j = 0; j < i     ; j++) putchar('*');
        for (int j = 0; j < i-1   ; j++) putchar('*');
        putchar('\n');
    }

    // bottom half; thus starting from loop-1
    for (int i = loop-1; i >= 1; i--) {
        for (int j = 0; j < loop-i; j++) putchar(' ');
        for (int j = 0; j < i     ; j++) putchar('*');
        for (int j = 0; j < i-1   ; j++) putchar('*');
        putchar('\n');
    }
}
```


## 13
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    int spaces = 2*(n-1) - 1;
    for (int i = 1; i < n; i++) {
        for (int j = 1; j <= i     ; j++) printf("%d", j);
        for (int j = 0; j <  spaces; j++) putchar(' ');
        spaces -= 2;
        for (int j = i; j >= 1     ; j--) printf("%d", j);
        putchar('\n');
    }

    // the last line
    for (int i = 1  ; i <= n; i++) printf("%d", i);
    for (int i = n-1; i >= 1; i--) printf("%d", i);
    putchar('\n');
}
```


\\

```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j < 2*n; j++) {
            if      (j <= i)    printf("%d", j);
            else if (j < 2*n-i) printf(" ");
            else                printf("%d", 2*n-j);
        }
        printf("\n");
    }
}
```


## 14
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        if (i % 2 == 0)
            for (int j = 0; j < n; j++) putchar('*');
        else {
            putchar('*');
            for (int j = 0; j < n-2; j++) putchar(' ');
            putchar('*');
        }
        putchar('\n');
    }
}
```


## 15
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 0; i < n; i++) putchar('Z');
    putchar('\n');

    for (int i = n-1; i >= 2; i--)
        printf("%*c\n", i, 'Z');

    for (int i = 0; i < n; i++) putchar('Z');
    putchar('\n');
}
```


## 16
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    // top half
    int spaces = n-2; // spaces in-between stars
    for (int i = 0; i < n/2; i++) {
        for (int j = 0; j < i; j++) putchar(' ');
        putchar('*');
        for (int j = 0; j < spaces; j++) putchar(' ');
        spaces -= 2;
        printf("*\n");
    }

    // middle line; single star
    for (int i = 0; i < n/2; i++) putchar(' ');
    printf("*\n");

    // bottom half
    spaces = 1;
    for (int i = n/2-1; i >= 0; i--) {
        for (int j = 0; j < i; j++) putchar(' ');
        putchar('*');
        for (int j = 0; j < spaces; j++) putchar(' ');
        spaces += 2;
        printf("*\n");
    }
}
```


## 17
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 0; i < n/2; i++) putchar(' ');
    printf("$\n");

    int spaces = 0;
    for (int i = n/2-1; i >= 1; i--) {
        for (int j = 0; j < i; j++) putchar(' ');
        putchar('$');

        for (int j = 0; j < spaces; j++) putchar(' ');
        putchar('$');

        for (int j = 0; j < spaces; j++) putchar(' ');
        putchar('$');

        spaces++;
        putchar('\n');
    }

    for (int i = 0; i < n; i++) putchar('$');
    putchar('\n');

    spaces--;
    for (int i = 1; spaces >= 0; i++) {
        for (int j = 0; j < i; j++) putchar(' ');
        putchar('$');

        for (int j = 0; j < spaces; j++) putchar(' ');
        putchar('$');

        for (int j = 0; j < spaces; j++) putchar(' ');
        putchar('$');

        spaces--;
        putchar('\n');
    }

    for (int i = 0; i < n/2; i++) putchar(' ');
    printf("$\n");
}
```


## 18
```c
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        if (i == n/2) {
            for (int j = 0; j < n; j++) printf("H ");
            putchar('\n');
        } else {
            putchar('H');
            for (int j = 0; j < n-2; j++) printf("  ");
            printf(" H\n");
        }
    }
}
```

