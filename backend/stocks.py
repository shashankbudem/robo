# importing the Nse() function from the nsetools library
from nsetools import Nse

# creating an NSE object
nse_obj = Nse()

# getting quotation of the company
the_quotation = nse_obj.get_quote('vedl')

# printing the name of the company
print(the_quotation["companyName"])

# printing average price
print("EPS: " + str(the_quotation["totalTradedVolume"]))