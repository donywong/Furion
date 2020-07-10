﻿using Fur.DatabaseVisitor.Entities;
using Fur.DatabaseVisitor.Page;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Fur.DatabaseVisitor.Repositories
{
    /// <summary>
    /// 泛型仓储 查询操作 分部类
    /// </summary>
    /// <typeparam name="TEntity">实体类型</typeparam>
    public partial interface IRepositoryOfT<TEntity> where TEntity : class, IDbEntity, new()
    {
        #region 查询单条 + TEntity Find(object id)
        /// <summary>
        /// 查询单条
        /// </summary>
        /// <param name="id">主键</param>
        /// <returns>实体</returns>
        TEntity Find(object id);
        #endregion

        #region 查询单条 + ValueTask<TEntity> FindAsync(object id)
        /// <summary>
        /// 查询单条
        /// </summary>
        /// <param name="id">主键</param>
        /// <returns><see cref="ValueTask{TResult}"/></returns>
        ValueTask<TEntity> FindAsync(object id);
        #endregion


        #region 查询单条 + TEntity Single()
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <returns>实体</returns>
        TEntity Single();
        #endregion

        #region 查询单条 + Task<TEntity> SingleAsync()
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <returns>实体</returns>
        Task<TEntity> SingleAsync();
        #endregion

        #region 查询单条 + TEntity Single(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        TEntity Single(Expression<Func<TEntity, bool>> expression);
        #endregion

        #region 查询单条 + Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns><see cref="Task{TResult}"/></returns>
        Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> expression);
        #endregion


        #region 查询单条 + TEntity Single(bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity Single(bool noTracking);
        #endregion

        #region 查询单条 + Task<TEntity> SingleAsync(bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> SingleAsync(bool noTracking);
        #endregion

        #region 查询单条 + TEntity Single(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity Single(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion

        #region 查询单条 + Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果结果集找不到或包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion


        #region 查询单条 + TEntity SingleOrDefault()
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <returns>实体</returns>
        TEntity SingleOrDefault();
        #endregion

        #region 查询单条 + Task<TEntity> SingleOrDefaultAsync()
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <returns>实体</returns>
        Task<TEntity> SingleOrDefaultAsync();
        #endregion

        #region 查询单条 + TEntity SingleOrDefault(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> expression);
        #endregion

        #region 查询单条 + Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> expression);
        #endregion


        #region 查询单条 + TEntity SingleOrDefault(bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity SingleOrDefault(bool noTracking);
        #endregion

        #region 查询单条 + Task<TEntity> SingleOrDefaultAsync(bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> SingleOrDefaultAsync(bool noTracking);
        #endregion

        #region 查询单条 + TEntity SingleOrDefault(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion

        #region 查询单条 + Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询单条
        /// <para>如果包含多条将抛异常</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion


        #region 查询一条 + TEntity First()
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <returns>实体</returns>
        TEntity First();
        #endregion

        #region 查询一条 + Task<TEntity> FirstAsync()
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <returns>实体</returns>
        Task<TEntity> FirstAsync();
        #endregion

        #region 查询一条 + TEntity First(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        TEntity First(Expression<Func<TEntity, bool>> expression);
        #endregion

        #region 查询一条 + Task<TEntity> FirstAsync(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        Task<TEntity> FirstAsync(Expression<Func<TEntity, bool>> expression);
        #endregion


        #region 查询一条 + TEntity First(bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity First(bool noTracking);
        #endregion

        #region 查询一条 + Task<TEntity> FirstAsync(bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> FirstAsync(bool noTracking);
        #endregion

        #region 查询一条 + TEntity First(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns></returns>
        TEntity First(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion

        #region 查询一条 + Task<TEntity> FirstAsync(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c></para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> FirstAsync(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion


        #region 查询一条 + TEntity FirstOrDefault()
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <returns>实体</returns>
        TEntity FirstOrDefault();
        #endregion

        #region 查询一条 + Task<TEntity> FirstOrDefaultAsync()
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <returns>实体</returns>
        Task<TEntity> FirstOrDefaultAsync();
        #endregion

        #region 查询一条 + TEntity FirstOrDefault(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> expression);
        #endregion

        #region 查询一条 + Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> expression)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <returns>实体</returns>
        Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> expression);
        #endregion


        #region 查询一条 + TEntity FirstOrDefault(bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity FirstOrDefault(bool noTracking);
        #endregion

        #region 查询一条 + Task<TEntity> FirstOrDefaultAsync(bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> FirstOrDefaultAsync(bool noTracking);
        #endregion

        #region 查询一条 + TEntity FirstOrDefault(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion

        #region 查询一条 + Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> expression, bool noTracking)
        /// <summary>
        /// 查询一条
        /// <para>类似 <c>select top 1 * from table.</c>，没找到会返回null</para>
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <returns>实体</returns>
        Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> expression, bool noTracking);
        #endregion


        #region 查询多条 + IQueryable<TEntity> All(bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 查询多条
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        IQueryable<TEntity> All(bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion

        #region 查询多条 + Task<List<TEntity>> AllAsync(bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 查询多条
        /// </summary>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        Task<List<TEntity>> AllAsync(bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion

        #region 查询多条 + IQueryable<TEntity> All(Expression<Func<TEntity, bool>> expression, bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 查询多条
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        IQueryable<TEntity> All(Expression<Func<TEntity, bool>> expression, bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion

        #region 查询多条 + Task<List<TEntity>> AllAsync(Expression<Func<TEntity, bool>> expression, bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 查询多条
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        Task<List<TEntity>> AllAsync(Expression<Func<TEntity, bool>> expression, bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion


        #region 分页查询多条 + IPagedListOfT<TEntity> PageAll(int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 分页查询多条
        /// </summary>
        /// <param name="pageIndex">页码</param>
        /// <param name="pageSize">页容量</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns><see cref="IPagedListOfT{T}"/></returns>
        IPagedListOfT<TEntity> PageAll(int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion

        #region 分页查询多条 + Task<IPagedListOfT<TEntity>> PageAllAsync(int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 分页查询多条
        /// </summary>
        /// <param name="pageIndex">页码</param>
        /// <param name="pageSize">页容量</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        Task<IPagedListOfT<TEntity>> PageAllAsync(int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion

        #region 分页查询多条 + IPagedListOfT<TEntity> PageAll(Expression<Func<TEntity, bool>> expression, int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 分页查询多条
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="pageIndex">页码</param>
        /// <param name="pageSize">页容量</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        IPagedListOfT<TEntity> PageAll(Expression<Func<TEntity, bool>> expression, int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion

        #region 分页查询多条 + Task<IPagedListOfT<TEntity>> PageAllAsync(Expression<Func<TEntity, bool>> expression, int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false)
        /// <summary>
        /// 分页查询多条
        /// </summary>
        /// <param name="expression">表达式</param>
        /// <param name="pageIndex">页码</param>
        /// <param name="pageSize">页容量</param>
        /// <param name="noTracking">不跟踪实体</param>
        /// <param name="ignoreQueryFilters">忽略过滤器</param>
        /// <returns>多个实体</returns>
        Task<IPagedListOfT<TEntity>> PageAllAsync(Expression<Func<TEntity, bool>> expression, int pageIndex = 0, int pageSize = 20, bool noTracking = true, bool ignoreQueryFilters = false);
        #endregion
    }
}
