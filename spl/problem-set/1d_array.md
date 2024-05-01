
# 1D Array

## 01
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);

    for (int i = n-1; i >= 0; i--) printf("%d ", arr[i]);
    putchar('\n');
}
```

## 02
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    printf("%d\n", sum);
}
```

## 03
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    int sum = 0;
    for (int i = 0; i < n; i++)
        if (arr[i] % 2 == 0)
            sum += arr[i];

    printf("%d\n", sum);
}
```

## 04
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    int sum = 0;
    for (int i = 0; i < n; i++)
        if (i % 2 == 0)
            sum += arr[i];

    printf("%d\n", sum);
}
```

## 05
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    for (int i = 0, tmp; i < n/2; i++) {
        tmp = arr[i];
        arr[i] = arr[n-1 - i];
        arr[n-1 - i] = tmp;
    }

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    putchar('\n');
}
```

## 06
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);

    int max = 0,
        min = 99999,
        max_indx = 0,
        min_indx = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
            max_indx = i;
        }
        if (arr[i] < min){
             min = arr[i];
             min_indx = i;
        }
    }

    printf("Max: %d, Index: %d\n", max, max_indx);
    printf("Min: %d, Index: %d\n", min, min_indx);
}
```

## 07
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    char arr[n];
    for (int i = 0; i < n; i++) scanf(" %c", arr+i);

    int count = 0;
    for (int i = 0; i < n; i++) {
        char ch = arr[i];
        if (ch == 'A'
            || ch == 'E'
            || ch == 'I'
            || ch == 'O'
            || ch == 'U')
            count++;
    }

    printf("Count: %d\n", count);
}
```

## 08
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);
    int query; scanf("%d", &query);

    int found_n = 0;
    int found_indc[n]; // max we need is n; all same
    for (int i = 0; i < n; i++)
        if (arr[i] == query)
            found_indc[found_n++] = i;

    if (found_n) {
        printf("FOUND at index position: ");
        for (int i = 0; i < found_n; i++)
            printf("%d ", found_indc[i]);
        putchar('\n');
    } else
        printf("NOT FOUND\n");
}
```

## 09
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    int arr_rev[n];
    for (int i = 0; i < n; i++)
        arr_rev[i] = arr[n-1 - i];

    printf("Array A: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    putchar('\n');

    printf("Array B: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr_rev[i]);
    putchar('\n');
}
```

## 10
```c:line-numbers
#include <stdio.h>

int main() {
    int a[50];
    int a_n; scanf("%d", &a_n);
    for (int i = 0; i < a_n; i++) scanf("%d", a+i);   

    int b[50];
    int b_n; scanf("%d", &b_n);
    for (int i = 0; i < b_n; i++) scanf("%d", b+i);   

    int max = (a_n > b_n) ? a_n : b_n;
    for (int i = 0; i < max; i++) {
        int tmp = a[i];
        a[i] = b[i];
        b[i] = tmp;
    }

    printf("Array A: ");
    for (int i = 0; i < b_n; i++)
        printf("%d ", a[i]);
    putchar('\n');

    printf("Array B: ");
    for (int i = 0; i < a_n; i++)
        printf("%d ", b[i]);
    putchar('\n');
}
```

## 11
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    for (int i = 0; i < n; i++)
        if (arr[i] % 3 == 0)
            arr[i] = -1;

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    putchar('\n');
}
```

## 12
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);   

    int sorted = 0; // flag
    for (int i = 0; !sorted && i < n; i++) {
        sorted = 1;
        for (int j = 1; j < n-i; j++)
            if (arr[j-1] > arr[j]) {
                int tmp  = arr[j];
                arr[j]   = arr[j-1];
                arr[j-1] = tmp;
                sorted = 0; // had to swap so not sorted yet
            }
    }

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    putchar('\n');
}
```

## 13
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", arr+i);
    
    for (int i = 0; i < n; i++) {
        for (int j = i+1; j < n; j++) {
            if (arr[i] == arr[j]) {
                // matched; no need to remove, just shift left
                // [1 1 2 3] -> [1 2 3]
                // [1 1 2 3] -> [1 2 2 3] -> [1 2 3]
                //  k---^          k---^
                for (int k = j+1; k < n; k++)
                    arr[k-1] = arr[k];

                n--; // one gone
                j--; // [1 1 2 3] -> [1 2 3]
                     // j--^         j--^
                     // j will go to 3 on the next loop
                     // so decrement j so it starts from 2 again
            }
        }
    }

    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    putchar('\n');
}
```

## 14
```c:line-numbers
#include <stdio.h>

int main() {
    int a_n; scanf("%d", &a_n);
    int a[a_n];
    for (int i = 0; i < a_n; i++) scanf("%d", a+i);

    int b_n; scanf("%d", &b_n);
    int b[b_n];
    for (int i = 0; i < b_n; i++) scanf("%d", b+i);

    int intrsctn[(a_n < b_n) ? a_n : b_n];
    int intrsctn_n = 0;

    for (int i = 0; i < a_n; i++)
        for (int j = 0; j < b_n; j++)
            if (a[i] == b[j])
                intrsctn[intrsctn_n++] = b[j];

    if (!intrsctn_n)
        printf("Empty set");
    else
        for (int i = 0; i < intrsctn_n; i++) printf("%d ", intrsctn[i]);
    putchar('\n');
}
```

## 15
```c:line-numbers
#include <stdio.h>

int main() {
    int a_n; scanf("%d", &a_n);
    int a[a_n];
    for (int i = 0; i < a_n; i++) scanf("%d", a+i);

    int b_n; scanf("%d", &b_n);
    int b[b_n];
    for (int i = 0; i < b_n; i++) scanf("%d", b+i);

    int uni[a_n + b_n];
    int uni_n = 0;

    for (int i = 0; i < a_n; i++)
        uni[i] = a[i];
    uni_n = a_n;

    for (int i = 0; i < b_n; i++) {
        int found = 0;
        for (int j = 0; j < a_n; j++) {
            if (b[i] == uni[j]) {
                found = 1;
                break; // don't add
            }
        }
        if (!found) uni[uni_n++] = b[i];
    }

    if (!uni_n)
        printf("Empty set");
    else
        for (int i = 0; i < uni_n; i++) printf("%d ", uni[i]);
    putchar('\n');
}
```

## 16
```c:line-numbers
#include <stdio.h>

int main() {
    int a_n; scanf("%d", &a_n);
    int a[a_n];
    for (int i = 0; i < a_n; i++) scanf("%d", a+i);

    int b_n; scanf("%d", &b_n);
    int b[b_n];
    for (int i = 0; i < b_n; i++) scanf("%d", b+i);
    
    // searching in b
    // if found shifting left
    for (int i = 0; i < a_n; i++) {
        for (int j = 0; j < b_n; j++) {
            if (a[i] == b[j]) {
                for (int k = i+1; k < a_n; k++)
                    a[k-1] = a[k];
                a_n--; // one gone
                i--; 
            }
        }
    }

    for (int i = 0; i < a_n; i++) printf("%d ", a[i]);
    putchar('\n');
}
```

