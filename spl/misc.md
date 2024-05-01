
# Miscellaneous

## Convert decimal to base
```c:line-numbers
#include <stdio.h>

char symbols[36]; // maximum base 36; digits (0-9) and alpha (A-Z)

void dec_to_base(int n, int base) {
    if (!n) return;

    dec_to_base(n/base, base);
    putchar(symbols[n % base]);    // least significant bit so printing last
}

int main(void) {
    int base, n;
    scanf("%d %d", &base, &n);

    if (base < 2 || base > 36) {
        printf("Only 2 to 36 bases are supported.\n");
        return 0;
    }

    if (!n) {
        printf("0\n");
        return 0;
    }

    // initializing symbols
    for (int i = 0; i < base; i++)
        symbols[i] = (i >= 10) ? 'A' + i-10 : '0' + i;

    dec_to_base(n, base);
    putchar('\n');
}
```

## Armstrong number
```c
#include <stdio.h>
#include <math.h>

int main() {
    int n; scanf("%d", &n);

    int n_digs = log10(n) + 1;

    int sum = 0;
    for (int i = n; i; i /= 10)
        sum += pow(i % 10, n_digs);

    if (sum == n)
        printf("Yes\n");
    else
        printf("No\n");
}
```

## Reverse the words in a string

| Input           | Output          |
|-----------------|-----------------|
| my name is andy | andy is my name |

### Iterative
```c
#include <stdio.h>
#include <ctype.h>

int main() {
    char str[50];
    int len = 0;
    for (; (str[len] = getchar()) != '\n'; len++);
    str[len] = 0;

    // reverse string
    for (int i = 0; i < len/2; i++) {
        char tmp = str[i];
        str[i] = str[len-1 - i];
        str[len-1 - i] = tmp;
    }
    puts(str);

    // reverse word by word
    for (int i = 0, j = 0; i <= len; i++) {
        if ((str[i] == ' ' || str[i] == 0) && isalpha(str[i-1])) {
            for (int k = 0, l = i-j; k < l/2; k++) {
                char tmp = str[j+k];
                str[j+k] = str[i-1 - k];
                str[i-1 - k] = tmp;
            }
            // skipping extra spaces
            for (; str[i] == ' '; i++);
            j = i;
        }
    }
    puts(str);
}
```

### Recursive
```c
#include <stdio.h>

char* rev_sen(char *dup, char *s) {
    if (dup[0] == '\0') return s;
    if (dup[0] == ' ') dup += 1; // skipping the space

    int i;
    for (i = 0; dup[i] != ' ' && dup[i] != '\0'; i++);

    s = rev_sen(dup+i, s);

    for (i = 0; dup[i] != ' ' && dup[i] != '\0'; s[i++] = dup[i]);
    s[i] = ' ';

    return s+i+1;
}

int main() {
    char s[100];
    int len;
    for (len = 0; (s[len] = getchar()) != '\n'; len++);
    s[len] = '\0';

    char dup[100]; // duplicate
    for (int i = 0; (dup[i] = s[i]) != '\0'; i++);
    
    char *after_end = rev_sen(dup, s);
    *(after_end-1) = '\0';

    puts(s);
}
```
