using System;
using System.Collections.Generic;
using System.Linq;
using Codility.Tasks.BasketUnitTests.Source;
using Xunit;

namespace Codility.Taks.BasketUnitTests.Solutions
{
  public class ShoppingCartUnitTests
  {
    private readonly IShoppingCart _shoppingCart;
    public ShoppingCartUnitTests(IShoppingCart shoppingCart)
    {
      _shoppingCart = shoppingCart;
    }

    //Unit tests here!
    // 1
    [OnlyAddProductsThatAlreadyExist]
    public void AddingProduct_OutsideOfCurrentIds_ShouldThrowCannotAddProductNotBelongingToRepository()
    {
        //MUST add the IProductRepository First
        _shoppingCart.AddProduct(1,2); //adds two oranges Passes

        //should throw CannotAddProductNotBelongingToRepository
        Assert.Throws<CannotAddProductNotBelongingToRepository>(() => _shoppingCart.AddProduct(0,2));
        Assert.Throws<CannotAddProductNotBelongingToRepository>(() => _shoppingCart.AddProduct(11,3));
    }

    //  2
    [OnlyAddsNumbersGreaterThanZero]
    public void AddingProduct_WhenQuantityIs_GreaterThanZero_ShouldThrowQuantityCannotBeNegativeExceptions()
    {
        //trying to add zero to oranges (1)
        Assert.Throws<QuantityCannotBeNegativeExceptions>(() => _shoppingCart.AddProduct(1,0)); 

        //trying to add -2 to Banana Juice (4)
        Assert.Throws<QuantityCannotBeNegativeExceptions>(() => _shoppingCart.AddProduct(4,-2)); 
    }

    // 3
    [AddQuantityofProductsGreaterThanNumberAvailable]
    public void AddQuantity_ofProducts_GreaterThan_NumberAvailable_ShouldThrowHigherQuantityAddedThanAvailableExceptions()
    {
        //trying to add 13 apple juices to shopping cart
        Assert.Throws<HigherQuantityAddedThanAvailableExceptions>(() => _shoppingCart.AddProduct(2,13)); 

        //trying to add 20 cherry juices to cart
        Assert.Throws<HigherQuantityAddedThanAvailableExceptions>(() => _shoppingCart.AddProduct(5,20)); 
    }

    // 4
    [RemoveItemsFromShoppingCartAfterAdding]
    public void BeAbleToRemoveItemsFromShoppingCartAfterAdding_ShouldThrowCannotRemoveHigherQuantityThanAddedExceptions()
    {
        _shoppingCart.AddProduct(2,5);
        Assert.Throws<CannotRemoveHigherQuantityThanAddedExceptions>(()=> _shoppingCart.RemoveProduct(2,6));
    }

    // 5
    [OnlyRemoveNumbersGreaterThanZeroFromShoppingCart]
    public void OnlyRemoveNumbersGreaterThanZeroFromShoppingCart_ShouldThrowQuantityCannotBeNegativeExceptions()
    {
        Assert.Throws<QuantityCannotBeNegativeExceptions>(()=> _shoppingCart.RemoveProduct(2,0));
        Assert.Throws<QuantityCannotBeNegativeExceptions>(()=> _shoppingCart.RemoveProduct(3,-3));
    }

    // 6
    [CannotRemoveMoreProductsThanExistInShoppingCart]
    public void CannotRemoveMoreProductsThanExistInShoppingCart_ShouldThrowCannotRemoveHigherQuantityThanAddedExceptions()
    {
        //added 2 pineapple juices
        _shoppingCart.AddProduct(3,2);
        //removing 3 pineapple juices
        Assert.Throws<CannotRemoveHigherQuantityThanAddedExceptions>(()=> _shoppingCart.RemoveProduct(3,3));
    }

    // 7
    [RemoveProductFromShoppingCartIfZero]
    public void RemoveProducts_FromShoppingCart_IfZero_ShouldThrowQuantityCannotBeNegativeExceptions()
    {
        //added 2 pineapple juices
        _shoppingCart.AddProduct(3,2);
        //removing 3 pineapple juices
        _shoppingCart.RemoveProduct(3,2);

        //BusinessLogicException that GetShoppingCartItems should be empty

        IList<ShoppingCartItem> items = _shoppingCart.GetShoppingCartItems();
        IList<ShoppingCartItem> emptyList = null;
        Assert.Equal(emptyList, items);
        // Assert.Throws<BusinessLogicException>(()=> _shoppingCart.GetShoppingCartItems());
    }

    // 8
    [SumQuantitiesOfSameProduct]
    public void SumQuantitiesOfSameProduct()
    {
        _shoppingCart.AddProduct(3,2);
        _shoppingCart.AddProduct(3,2);

        int cartTotal = _shoppingCart.GetTotal();
        int testTotal = 20;
        int totalQuantity = 4;

        Assert.Equal(testTotal,cartTotal,"Total Cart Amount is Incorrect");

        IList<ShoppingCartItem> items = _shoppingCart.GetShoppingCartItems();
        Assert.Equal(4, items[0][Quantity]); //cart should have 4 pineapple juices

        ShoppingCartItem firstItem = items.ElementAt(0);
        Assert.Equal(totalQuantity, firstItem[Quantity]); //cart should have 4 pineapple juices
    }

    // 9
    [ReturnAddedProducts]
    public void stuff()
    {
        _shoppingCart.AddProduct(3,2);
        _shoppingCart.AddProduct(3,2);

        IList<ShoppingCartItem> items = _shoppingCart.GetShoppingCartItems();
        Assert.Equal(testTotal,cartTotal,"Products Returned Incorrectly");
        Assert.NotEqual(null, items, "Products have not returned anything");
    }

    // 10
    [ShoppingCartShouldTotalAmountOfItemsAdded]
    public void ShoppingCartShouldTotalAmountOfItemsAdded()
    {
        int totalPrice = 30;

        _shoppingCart.AddProduct(1,1); // $1
        _shoppingCart.AddProduct(2,1); // $3 
        _shoppingCart.AddProduct(3,2); // $10
        _shoppingCart.AddProduct(4,1); // $7
        _shoppingCart.AddProduct(5,1); // $9

        int cartTotal =_shoppingCart.GetTotal();
        
        Assert.Equal(totalPrice,cartTotal,"Total Cart Amount is Incorrect");
        
    }

    // 11
    [ShoppingCartIsCleared]
    public void ShoppingCartIsCleared()
    {
        _shoppingCart.AddProduct(1,1); 
        _shoppingCart.RemoveProduct(1,1);

        IList<ShoppingCartItem> items = _shoppingCart.GetShoppingCartItems();
        Assert.True(items == null);
    }

    [CustomFact]
    public void SampleTest()
    {
      _shoppingCart.AddProduct(1,2);

      Assert.Throws<BusinessLogicException>(()=> _shoppingCart.RemoveProduct(1,2));
      Assert.True(value);
      Assert.False(value);
      Assert.Equal(expected, actual);
      Assert.NotEqual(expected, actual);
    }

    /* Sample Test */
    [CustomFact]
    public void ShoppingCartShouldBeImplemented()
    {
      Assert.Throws<Exception>(()=> /*'Testing code here'*/);
      Assert.True(value);
      Assert.False(value);
      Assert.Equal(expected, actual);
      Assert.NotEqual(expected, actual);
    }

    public interface IShoppingCart
    {
      //Add requested quantity of product to shoppingCart
      void AddProduct(int productId, int quantity);
      //Remove requested quantity of product from shoppingCart
      void RemoveProduct(int productId, int quantity);
      //get shopping cart items and their quantity
      IList<ShoppingCartItem> GetShoppingCartItems();
      //get total value of shoppingCart (sum of quantity*unitprice for each added product)
      int GetTotal();
      // Clear shopping car
      void Clear();
    }
    // An already implemented mock of IProduct Repository
    // it is described in detail below/
    // You may use it or implement your own one. 
    public interface IProductRepository
    {
      IList<Product> GetProducts();
    }
    // Product returned by ProductRepository
    public class Product
    {
      public int Id {get; set;}
      public string Name {get;set;}
      public int AvailableQuantity {get; set;}
      public int UnitPrice {get; set;}
    }
    //Shopping Cart Item
    public class ShoppingCartItem
    {
      public int ProductId {get; set;}
      public int Quantity {get; set;}
      public int UnitPrice {get; set;}
    }
    // this exception should be thrown once ShoppingCart conditions are not fulfilled
    public class QuantityCannotBeNegativeException : Exception {}

    public class CannotAddProductNotBelongingToRepository : Exception {}

    public class HigherQuantityAddedthanAvailableExceptions : Exception {}

    public class CannotRemoveHigherQuantityThanAddedException : Exception {}
  }
}