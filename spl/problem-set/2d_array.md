
# 2D Arrays

## 01
```c:line-numbers
#include <stdio.h>

int main() {
    int mat[3][3];
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            scanf("%d", &mat[i][j]);

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
            printf("%d ", mat[i][j]);
        putchar('\n');
    }
}
```

## 02
```c:line-numbers
#include <stdio.h>

int main() {
    int m, n; scanf("%d%d", &m, &n);
    int mat[m][n];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &mat[i][j]);

    printf("Row-wise: ");
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            printf("%d ", mat[i][j]);
    putchar('\n');

    printf("Col-wise: ");
    for (int j = 0; j < n; j++)
        for (int i = 0; i < m; i++)
            printf("%d ", mat[i][j]);
    putchar('\n');
}
```

## 03
```c:line-numbers
#include <stdio.h>

int main() {
    int mat[3][3];
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            scanf("%d", &mat[i][j]);

    int determinant =
          mat[0][0] * (mat[1][1]*mat[2][2] - mat[2][1]*mat[1][2])
        - mat[0][1] * (mat[1][0]*mat[2][2] - mat[2][0]*mat[1][2])
        + mat[0][2] * (mat[1][0]*mat[2][1] - mat[2][0]*mat[1][1]);

    printf("%d\n", determinant);
}
```

## 04
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int mat[n][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &mat[i][j]);

    printf("Major diagonal: ");
    for (int i = 0; i < n; i++)
        printf("%d ", mat[i][i]);
    putchar('\n');

    printf("Minor diagonal: ");
    for (int i = 0; i < n; i++)
        printf("%d ", mat[i][n-1-i]);
    putchar('\n');
}
```

## 05
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int mat[n][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (i == j)
                mat[i][j] = 1;
            else
                mat[i][j] = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", mat[i][j]);
        putchar('\n');
    }
}
```

## 06
```c:line-numbers
#include <stdio.h>

int main() {
    int m; scanf("%d", &m);
    int n; scanf("%d", &n);
    int A[m][n], B[m][n];

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &B[i][j]);

    int C[m][n];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            C[i][j] = A[i][j] + B[i][j];

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", C[i][j]);
        putchar('\n');
    }
}
```

## 07
```c:line-numbers
#include <stdio.h>

int main() {
    int n = 3;
    int A[n][n], B[n][n];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &B[i][j]);

    int C[n][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) {
            C[i][j] = A[i][0]*B[0][j]
                    + A[i][1]*B[1][j]
                    + A[i][2]*B[2][j];
        }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            printf("%2d ", C[i][j]);
        putchar('\n');
    }
}
```

## 08
```c:line-numbers
#include <stdio.h>

int main() {
    int m; scanf("%d", &m);
    int n; scanf("%d", &n);
    int A[m][n];

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);

    int max = 0, max_i = 0, max_j = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (A[i][j] > max) {
                max = A[i][j];
                max_i = i;
                max_j = j;
            }

    printf("Max: %d\nLoc: [%d][%d]\n", max, max_i, max_j);
}
```

## 09
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int A[n][n];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);

    int sum = 0;
    // first row
    for (int i = 0; i < n; i++)
        sum += A[0][i];
    // last row
    for (int i = 0; i < n; i++)
        sum += A[n-1][i];

    for (int i = 1; i < n-1; i++)
        sum += A[i][i] + A[i][n-1-i];

    sum -= A[n/2][n/2]; // added twice on previous loop

    printf("%d\n", sum);
}
```

## 10
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int A[n][n];
    
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);
    
    int sum = 0;

    // first row
    for (int i = 0; i <= n/2; i++)
        sum += A[0][i];
    sum += A[0][n-1];

    // last row
    for (int i = n/2; i < n; i++)
        sum += A[n-1][i];
    sum += A[n-1][0];
    
    // middle row
    for (int i = 0; i < n; i++)
        sum += A[n/2][i];

    // top half
    for (int i = 1; i < n/2; i++)
        sum += A[i][n/2] + A[i][n-1];
    
    // bottom half
    for (int i = n/2+1; i < n-1; i++)
        sum += A[i][0] + A[i][n/2];
    
    printf("%d\n", sum);
}
```

## 11
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int A[n][n];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);

    int sum = 0;
    for (int i = 0; i < n; i++)
        if (i % 2 == 0) {  // even index row; sum only odd indices
            for (int j = 1; j < n-1; j++)
                if (j % 2)
                    sum += A[i][j];
        } else {  // odd index row; sum all indices
            for (int j = 0; j < n; j++)
                sum += A[i][j];
        }

    printf("%d\n", sum);
}
```

## 12
```c:line-numbers
#include <stdio.h>

int main() {
    int m; scanf("%d", &m);
    int n; scanf("%d", &n);
    int A[m][n];

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n/2; j++) {
            int tmp = A[i][j];
            A[i][j] = A[i][n-1-j];
            A[i][n-1-j] = tmp;
        }

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", A[i][j]);
        putchar('\n');
    }
}
```

## 13
```c:line-numbers
#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    int A[n][n];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);

    for (int i = 0; i <= n/2; i++)
        for (int j = 0; j < n; j++)
            if (A[i][j] != A[j][i]) {
                printf("No\n");
                return 0;
            }

    printf("Yes\n");
}
```

## 14
```c:line-numbers
#include <stdio.h>
 
int main() {
    int m; scanf("%d", &m);
    int n; scanf("%d", &n);
    int A[m][n];
 
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);
 
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            int curr = A[i][j];
            for (int k = i; k < m; k++) {
                for (int l = (k==i)?j+1:0; l < n; l++)
                    if (A[k][l] == curr)
                        A[k][l] = -1;
            }
        }
 
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", A[i][j]);
        putchar('\n');
    }
 
}
```

## 15
```c:line-numbers
#include <stdio.h>
 
int main() {
    int m; scanf("%d", &m);
    int n; scanf("%d", &n);
    int A[m][n];
 
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &A[i][j]);
 
    int sum = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            sum += A[i][j];
 
    printf("%d\n", sum);
}
```

