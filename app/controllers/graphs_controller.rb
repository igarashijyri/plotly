class GraphsController < ApplicationController
  before_action :set_graph, only: [:show, :edit, :update, :destroy]

  def index
    @graphs = Graph.all
    gon.x = [1,2,3,4,5,6,7]
    gon.y = [2,4,1,2,6,4,1]
    # javaScriptからはgon.x, gon.y で参照できる
  end

  def show
  end

  def new
    @graph = Graph.new
  end

  def edit
  end

  def create
    @graph = Graph.new(graph_params)

    respond_to do |format|
      if @graph.save
        format.html { redirect_to @graph, notice: 'Graph was successfully created.' }
        format.json { render :show, status: :created, location: @graph }
      else
        format.html { render :new }
        format.json { render json: @graph.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @graph.update(graph_params)
        format.html { redirect_to @graph, notice: 'Graph was successfully updated.' }
        format.json { render :show, status: :ok, location: @graph }
      else
        format.html { render :edit }
        format.json { render json: @graph.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @graph.destroy
    respond_to do |format|
      format.html { redirect_to graphs_url, notice: 'Graph was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_graph
      @graph = Graph.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def graph_params
      params.fetch(:graph, {})
    end
end
