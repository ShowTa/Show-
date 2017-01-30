class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    Article.create(article_params)

    redirect_to action: :index
  end

  def edit
    @article = Article.find(params[:id])

    render action: :new
  end

  def update
    article = Article.find(params[:id])
    article.update(article_params)

    redirect_to action: :index
  end

  def destroy
    Article.find(params[:id]).delete

    redirect_to action: :index
  end

  private

  def article_params
    params.require(:article).permit(:title, :content)
  end
end
