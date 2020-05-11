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