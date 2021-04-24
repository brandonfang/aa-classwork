class CatsController < ApplicationController 

    def index
        @cats = Cat.all 

        render :index
    end
    
    def new
        @cat = Cat.new

        render :new
    end

    def edit
        @cat = Cat.find_by(params[:id])

        render :edit
    end

    def show
        @cat = Cat.find_by(id: params[:id])
        render :show
    end

    

    private 

    def cat_params
        params.require(:cat).permit(:name, :color, :birth_date, :sex, :description)
    end
end