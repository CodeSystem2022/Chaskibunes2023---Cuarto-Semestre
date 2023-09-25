import math
from decimal import Decimal

# NaN (Not a number)
a = float('NaN')
print(f'a: {a}')

# Módulo math
a = float('nan')
print(f'Es detipo NaN(Not a number)?: {math.isnan(a)}')

# Módulo decimal
a = Decimal('nan')
print(f'Es detipo NaN(Not a number)?: {math.isnan(a)}')
